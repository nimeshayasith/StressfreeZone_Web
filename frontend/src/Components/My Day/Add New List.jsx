import { useState, useEffect } from 'react';

function AddNewList() {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('lists');
    return savedLists ? JSON.parse(savedLists) : [];
  });
  const [newListName, setNewListName] = useState('');
  const [editingListIndex, setEditingListIndex] = useState(null);
  const [editingListName, setEditingListName] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskName, setEditingTaskName] = useState('');

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const addNewList = () => {
    if (newListName) {
      setLists([...lists, { name: newListName, tasks: [], newTask: '' }]);
      setNewListName('');
    }
  };

  const addNewTask = (index) => {
    if (lists[index].newTask) {
      const updatedLists = [...lists];
      updatedLists[index].tasks.push({ name: updatedLists[index].newTask, completed: false });
      updatedLists[index].newTask = '';
      setLists(updatedLists);
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

  const deleteList = (index) => {
    const updatedLists = lists.filter((_, i) => i !== index);
    setLists(updatedLists);
  };

  const startEditingListName = (index) => {
    setEditingListIndex(index);
    setEditingListName(lists[index].name);
  };

  const updateListName = (index) => {
    const updatedLists = [...lists];
    updatedLists[index].name = editingListName;
    setLists(updatedLists);
    setEditingListIndex(null);
    setEditingListName('');
  };

  const deleteTask = (listIndex, taskIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].tasks = updatedLists[listIndex].tasks.filter((_, i) => i !== taskIndex);
    setLists(updatedLists);
  };

  const startEditingTaskName = (listIndex, taskIndex, taskName) => {
    setEditingTaskIndex({ list: listIndex, task: taskIndex });
    setEditingTaskName(taskName);
  };

  const updateTaskName = (listIndex, taskIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].tasks[taskIndex].name = editingTaskName;
    setLists(updatedLists);
    setEditingTaskIndex(null);
    setEditingTaskName('');
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
              
              {/* Edit and Update Buttons for List */}
              <div className="flex gap-2">
                {editingListIndex === index ? (
                  <button
                    onClick={() => updateListName(index)}
                    className="bg-green-500  text-white p-2 rounded-2xl hover:bg-green-700"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => startEditingListName(index)}
                    className="bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-700"
                  >
                    Edit List
                  </button>
                )}
                <button
                  onClick={() => deleteList(index)}
                  className="bg-red-500 text-white p-2 rounded-2xl hover:bg-red-700"
                >
                  Delete List
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

                  {/* Edit and Update Buttons for Task */}
                  <div className="flex gap-2 ">
                    {editingTaskIndex?.list === index && editingTaskIndex?.task === taskIndex ? (
                      <button
                        onClick={() => updateTaskName(index, taskIndex)}
                        className="bg-green-500 text-white p-2 rounded-2xl hover:bg-green-800"
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        onClick={() => startEditingTaskName(index, taskIndex, task.name)}
                        className="bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-700"
                      >
                        Edit Task
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(index, taskIndex)}
                      className="bg-red-500 text-white p-2 rounded-2xl hover:bg-red-700"
                    >
                      Delete Task
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
