import { useState, useEffect } from 'react';

function AddNewList() {
  const [lists, setLists] = useState(() => {
    // Get saved lists from localStorage on initial load
    const savedLists = localStorage.getItem('lists');
    return savedLists ? JSON.parse(savedLists) : [];
  });
  const [newListName, setNewListName] = useState('');

  // Save lists to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

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
      updatedLists[index].tasks.push({ name: updatedLists[index].newTask, completed: false });
      updatedLists[index].newTask = ''; // Reset task input field for this list
      setLists(updatedLists);
    }
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (listIndex, taskIndex) => {
    const updatedLists = [...lists];
    const task = updatedLists[listIndex].tasks[taskIndex];
    task.completed = !task.completed; // Toggle the completed state
    setLists(updatedLists);
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
