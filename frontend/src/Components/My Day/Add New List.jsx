import { useState } from 'react';

function AddNewList() {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');

  // Function to add a new list
  const addNewList = () => {
    if (newListName) {
      setLists([...lists, { name: newListName, tasks: [], newTask: '' }]);
      setNewListName(''); // Reset the input field
    }
  };

  // Function to add a new task to a list
  const addNewTask = (index) => {
    if (lists[index].newTask) {
      const updatedLists = [...lists];
      updatedLists[index].tasks.push(updatedLists[index].newTask);
      updatedLists[index].newTask = ''; // Reset task input field for this list
      setLists(updatedLists);
    }
  };

  // Handle typing in task input field for a specific list
  const handleTaskInputChange = (index, value) => {
    const updatedLists = [...lists];
    updatedLists[index].newTask = value; // Update the newTask value for the specific list
    setLists(updatedLists);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">To-Do List</h1>
      
      {/* Section to add new list */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Enter new list name"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button
          onClick={addNewList}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
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
                className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
              >
                Add Task
              </button>
            </div>

            {/* Display all tasks for this list */}
            <ul className="list-disc pl-6 space-y-2">
              {list.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="text-lg">{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddNewList;
