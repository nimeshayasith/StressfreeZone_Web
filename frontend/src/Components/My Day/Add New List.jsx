import { useState, useEffect } from 'react';

function AddNewList() {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');

  // Fetch lists from backend when the component loads
  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/lists/gettask', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you store the token in localStorage
        }
      });
      const data = await response.json();
      setLists(data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  // Function to add a new list
  const addNewList = async () => {
    if (newListName) {
      try {
        const response = await fetch('http://localhost:5000/api/lists/posttask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ name: newListName })
        });

        const newList = await response.json();
        setLists([...lists, newList]);
        setNewListName(''); // Reset the input field
      } catch (error) {
        console.error('Error adding list:', error);
      }
    }
  };

  // Function to add a new task to a list
  const addNewTask = async (index) => {
    if (lists[index].newTask) {
      try {
        const response = await fetch(`http://localhost:5000/api/lists/${lists[index]._id}/tasks`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ name: lists[index].newTask })
        });

        const updatedList = await response.json();
        const updatedLists = [...lists];
        updatedLists[index] = updatedList;
        setLists(updatedLists);
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  // Function to toggle task completion
  const toggleTaskCompletion = async (listIndex, taskIndex) => {
    try {
      const taskId = lists[listIndex].tasks[taskIndex]._id;
      const response = await fetch(`http://localhost:5000/api/lists/${lists[listIndex]._id}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      const updatedList = await response.json();
      const updatedLists = [...lists];
      updatedLists[listIndex] = updatedList;
      setLists(updatedLists);
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  // Handle typing in task input field for a specific list
  const handleTaskInputChange = (index, value) => {
    const updatedLists = [...lists];
    updatedLists[index].newTask = value; // Update the newTask value for the specific list
    setLists(updatedLists);
  };

  return (
    <div className='min-h-screen p-8'>
      {/* Section to add new list */}
      <div className="flex gap-4 mb-6 ">
        <input
          type="text"
          className="border p-2 w-full"
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
      <div className="space-y-6">
        {lists.map((list, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">{list.name}</h2>
            
            {/* Section to add new task to this list */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                className="border p-2 w-full"
                placeholder={`Add new task to ${list.name}`}
                value={list.newTask} // Individual task state for each list
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
                <li key={taskIndex} className="text-lg flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index, taskIndex)}
                    className="mr-2"
                  />
                  <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.name}
                  </span>
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
