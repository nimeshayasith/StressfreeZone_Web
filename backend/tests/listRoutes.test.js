const request = require('supertest');
const express = require('express');
const mockingoose = require('mockingoose');
const List = require('../models/List');
const listRoutes = require('../routes/listRoutes');

const app = express();
app.use(express.json());


jest.mock('../middleware/authMiddleware', () => ({
  protect: (req, res, next) => {
    req.user = { _id: 'mockUserId' }; 
    next();
  }
}));

app.use('/api/lists', listRoutes);

  it('should fetch all lists for the user', async () => {
    mockingoose(List).toReturn([
      { _id: 'list1', name: 'List 1', user: 'mockUserId', tasks: [] },
    ], 'find');
  
    const res = await request(app).get('/api/lists/gettask');
  
    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'List 1' }),
      ])
    );
  });
  
  it('should create a new list', async () => {
    const saveMock = jest.fn().mockResolvedValue({
      _id: 'list2',
      name: 'New List',
      user: 'mockUserId',
      tasks: [],
    });
    List.prototype.save = saveMock;
  
    const res = await request(app)
      .post('/api/lists/posttask')
      .send({ name: 'New List' });
  
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('New List');
  });
  

  it('should delete a list by ID', async () => {
    const mockDelete = jest.fn().mockResolvedValue({});
    const mockList = {
      _id: 'list3',
      name: 'List to delete',
      user: 'mockUserId',
      deleteOne: mockDelete,
    };
  
   
    jest.spyOn(List, 'findById').mockResolvedValue(mockList);
  
    const res = await request(app).delete('/api/lists/list3');
  
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('List deleted successfully');
    expect(mockDelete).toHaveBeenCalled(); 
  });
  
  it('should update list name by ID', async () => {
    const mockSave = jest.fn().mockResolvedValue(true);
  
    const mockList = {
      _id: 'list1',
      name: 'Old Name',
      user: 'mockUserId',
      save: mockSave,
    };
  
    jest.spyOn(List, 'findById').mockResolvedValue(mockList);
  
    const res = await request(app)
      .put('/api/lists/list1')
      .send({ name: 'Updated Name' });
  
    expect(res.status).toBe(200);
    expect(mockList.name).toBe('Updated Name');
    expect(mockSave).toHaveBeenCalled();
    expect(res.body.name).toBe('Updated Name');
  });
      
