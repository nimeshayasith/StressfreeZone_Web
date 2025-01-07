import { useState, useEffect } from 'react';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';
import updateIcon from '../../assets/update.png';

function AddNewList() {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const [editingListIndex, setEditingListIndex] = useState(null);
  const [editingListName, setEditingListName] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskName, setEditingTaskName] = useState('');

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await fetch('https://localhost:5000/api/lists/gettask', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      });
      if(!response.ok) throw new Error('Error fetching lists');
      const data = await response.json();
      setLists(data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  const addNewList = async() => {
    if (newListName) {
      try{
        const respose = await fetch('https://localhost:5000/api/lists/posttask',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ name: newListName}),
        });
        if(!respose.ok) throw new Error('Error adding new list');
        const newList = await respose.json();
        setLists([...lists, newList]);
        setNewListName('');
      }catch(error){
        console.log('Error adding new list:',error);
      }
      
    }
  };

  const addNewTask = async(index) => {
    if (lists[index].newTask) {
      try{
        const response = await fetch(`https://localhost:5000/api/lists/${lists[index]._id}/tasks`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ name: lists[index].newTask}),
        });
        if(!response.ok) throw new Error('Error adding new task');
        const updatedList = await response.json();
        const updatedLists = [...lists];
        updatedLists[index] = updatedList;
        setLists(updatedLists);
        //setLists((prev) => prev.map((list) => (list._id === updatedList._id ? updatedList : list)));
      }catch(error){
        console.error('Error adding new task:', error);
      }

    }
  };

  const toggleTaskCompletion = (listIndex, taskIndex) => {
    const updatedLists = [...lists];
    const task = updatedLists[listIndex].tasks[taskIndex];
    task.completed = !task.completed;
    setLists(updatedLists);
  };

  const handleTaskInputChange = (index, value) => {
    const updatedLists = [...lists];
    updatedLists[index].newTask = value;
    setLists(updatedLists);
  };

  const deleteList = async(index) => {
    try{
      const listId = lists[index]._id;
      const response = await fetch(`https://localhost:5000/api/lists/${listId}`,{
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
      if(!response.ok) throw new Error('Error deleting list');

      const updatedLists = lists.filter((_, i) => i !== index);
      setLists(updatedLists);
    }catch(error){
      console.error('Error deleting list:',error);
    }
    
  };

  const startEditingListName = (index) => {
    setEditingListIndex(index);
    setEditingListName(lists[index].name);
  };

  const updateListName = async(index) => {
    const listId = lists[index]._id;
    try{
      const response = await fetch(`https://localhost:5000/api/lists/${listId}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({name:editingListName}),
      });
      if (!response.ok) throw new Error('Error updating list name');
      const updatedList = await response.json();
      const updatedLists = [...lists];
      updatedLists[index].name = editingListName;
      setLists(updatedLists);
      setEditingListIndex(null);
      setEditingListName('');

    }catch(error){
      console.error('Error updating list name:',error);
    }
    
  };

  const deleteTask = async(listIndex, taskIndex) => {
    try{
      const taskId = lists[listIndex].tasks[taskIndex]._id;
      const response = await fetch(`https://localhost:5000/api/lists/${lists[listIndex]._id}/tasks/${taskId}`,{
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if(!response.ok) throw new Error('Error deleting task');
      const updatedLists = [...lists];
      updatedLists[listIndex].tasks = updatedLists[listIndex].tasks.filter((_, i) => i !== taskIndex);
      setLists(updatedLists);
    }catch(error){
      console.error('Error deleting task:',error)
    }
    
  };

  const startEditingTaskName = (listIndex, taskIndex, taskName) => {
    setEditingTaskIndex({ list: listIndex, task: taskIndex });
    setEditingTaskName(taskName);
  };

  const updateTaskName = async(listIndex, taskIndex) => {
    const listId = lists[listIndex]._id;
    const taskId = lists[listIndex].tasks[taskIndex]._id;

    try{
      const response = await fetch(`https://localhost:5000/api/lists/${listId}/tasks/${taskId}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ name: editingTaskName }), 
      });
      if(!response) throw new Error('Error updating task name');
      const updatedList = await response.json();
      const updatedLists = [...lists];
      updatedLists[listIndex].tasks[taskIndex].name = editingTaskName;
      setLists(updatedLists);
      setEditingTaskIndex(null);
      setEditingTaskName('');    
    }catch(error){
      console.error('Error updating task name:',error);
    }
  };

  return (
    <div className='min-h-screen p-8'>
      {/* Section to add new list */}
      <div className="flex gap-4 mb-6">
        <input 
          type="text"
          className="border p-2  w-11/12"
          placeholder="Enter new list title"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button
          onClick={addNewList}
          className="bg-cyan-800 text-white p-2 rounded hover:bg-blue-700"
        >
          Add List
        </button>
      </div>

      {/* Display all lists */}
      <div className="space-y-8">
        {lists.map((list, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md">
            <div className="flex justify-between mb-3 items-center">
              {editingListIndex === index ? (
                <input
                  type="text"
                  value={editingListName}
                  onChange={(e) => setEditingListName(e.target.value)}
                  className="border p-1 rounded w-11/12 mr-2"
                />
              ) : (
                <h2 className="text-2xl font-semibold mb-4">{list.name}</h2>
              )}
              
              {/* Edit, Update, and Delete Buttons for List */}
              <div className="flex gap-2">
                {editingListIndex === index ? (
                  <button onClick={() => updateListName(index)} className="p-2">
                    <img src={updateIcon} alt="Update" className="h-6 w-6" />
                  </button>
                ) : (
                  <button onClick={() => startEditingListName(index)} className="p-2">
                    <img src={editIcon} alt="Edit" className="h-6 w-6" />
                  </button>
                )}
                <button onClick={() => deleteList(index)} className="p-2">
                  <img src={deleteIcon} alt="Delete" className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Section to add new task to this list */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                className="border p-2 w-10/12"
                placeholder={`Add new task to ${list.name}`}
                value={list.newTask}
                onChange={(e) => handleTaskInputChange(index, e.target.value)}
              />
              <button
                onClick={() => addNewTask(index)}
                className="bg-cyan-950 text-white p-2 rounded hover:bg-green-700"
              >
                Add Task
              </button>
            </div>

            {/* Display all tasks for this list */}
            <ul className="list-disc pl-6 space-y-2">
              {list.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="text-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(index, taskIndex)}
                      className="mr-2"
                    />
                    {editingTaskIndex?.list === index && editingTaskIndex?.task === taskIndex ? (
                      <input
                        type="text"
                        value={editingTaskName}
                        onChange={(e) => setEditingTaskName(e.target.value)}
                        className="border p-1 rounded w-10/12"
                      />
                    ) : (
                      <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.name}
                      </span>
                    )}
                  </div>

                  {/* Edit, Update, and Delete Buttons for Task */}
                  <div className="flex gap-2">
                    {editingTaskIndex?.list === index && editingTaskIndex?.task === taskIndex ? (
                      <button onClick={() => updateTaskName(index, taskIndex)} className="p-2">
                        <img src={updateIcon} alt="Update" className="h-6 w-6" />
                      </button>
                    ) : (
                      <button onClick={() => startEditingTaskName(index, taskIndex, task.name)} className="p-2">
                        <img src={editIcon} alt="Edit" className="h-6 w-6" />
                      </button>
                    )}
                    <button onClick={() => deleteTask(index, taskIndex)} className="p-2">
                      <img src={deleteIcon} alt="Delete" className="h-6 w-6" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddNewList;