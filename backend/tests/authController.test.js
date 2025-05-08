const mockingoose = require('mockingoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');

describe('Auth Controller - Login', () => {
  beforeAll(() => {
    process.env.JWT_SECRET = 'testsecret'; 
  });

  it('should login successfully with correct credentials', async () => {
    const req = {
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    };

    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = {
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      password: hashedPassword,
      isDeleted: false,
    };

    mockingoose(User).toReturn(user, 'findOne');

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(), 
    };

    await authController.login(req, res);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        token: expect.any(String),
        user: {
          name: 'Test User',
          email: 'test@example.com',
        },
      })
    );
  });

  it('should return 400 for invalid credentials', async () => {
    const req = {
      body: {
        email: 'test@example.com',
        password: 'wrongpassword',
      },
    };

    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = {
      _id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      password: hashedPassword,
      isDeleted: false,
    };

    mockingoose(User).toReturn(user, 'findOne');

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(), 
    };

    await authController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Invalid credentials' });
  });
});

describe('Auth Controller - Signup',() => {
    it('should register a new user', async () => {
        const req = {
            body: {
                name: "kaveesha",
                email: "kaveeshamadushan@gmail.com",
                password: "kaveesha123",
            },
        };
        mockingoose(User).toReturn(null, 'findOne');

        const savedUser = {
            _id: 'user101',
            name: 'kaveesha',
            email: 'kaveeshamadushan@gmail.com',
            password: await bcrypt.hash('kaveesha123', 10),
            isDeleted: false,
            save: jest.fn().mockResolvedValue({}),
        };

        jest.spyOn(User.prototype,'save').mockResolvedValue(savedUser);

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        await authController.signup(req,res);

        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                token: expect.any(String),
            })
        );
    });

    it('should not register if user already exists', async ()=> {
        const req = {
            body: {
              name: 'Existing User',
              email: 'existing@example.com',
              password: 'somepassword',
            },
          };
      
          const existingUser = {
            _id: 'user789',
            name: 'Existing User',
            email: 'existing@example.com',
            password: 'hashedpassword',
            isDeleted: false,
          };
      
          mockingoose(User).toReturn(existingUser, 'findOne');
      
          const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
          };
      
          await authController.signup(req, res);
      
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.json).toHaveBeenCalledWith({ msg: 'User already exists' });
    });
});