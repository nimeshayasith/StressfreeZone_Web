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
  const [editingTaskDueDate, setEditingTaskDueDate] = useState('');
  const [dateError, setDateError] = useState('');

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/lists/gettask', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) throw new Error('Error fetching lists');
      const data = await response.json();
      setLists(data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  // Function to check if a due date has passed
  const isDatePassed = (dueDate) => {
    if (!dueDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part for accurate comparison
    const taskDueDate = new Date(dueDate);
    return taskDueDate < today;
  };

  // Function to check if a date is today or in the future
  const isValidFutureDate = (dateString) => {
    if (!dateString) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const inputDate = new Date(dateString);
    return inputDate >= today;
  };

  const addNewList = async () => {
    if (newListName) {
      try {
        const response = await fetch('http://localhost:5000/api/lists/posttask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ name: newListName }),
        });
        if (!response.ok) throw new Error('Error adding new list');
        const newList = await response.json();
        setLists([...lists, newList]);
        setNewListName('');
      } catch (error) {
        console.log('Error adding new list:', error);
      }
    }
  };

  const addNewTask = async (index) => {
    if (!lists[index].newTask) {
      setDateError('Task name is required');
      return;
    }
    
    if (!lists[index].newTaskDueDate) {
      setDateError('Due date is required');
      return;
    }
    
    if (!isValidFutureDate(lists[index].newTaskDueDate)) {
      setDateError('Due date must be today or in the future');
      return;
    }
    
    try {
      const response = await fetch(`http://localhost:5000/api/lists/${lists[index]._id}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          name: lists[index].newTask,
          dueDate: lists[index].newTaskDueDate
        }),
      });
      if (!response.ok) throw new Error('Error adding new task');
      const updatedList = await response.json();
      const updatedLists = [...lists];
      updatedLists[index] = updatedList;
      setLists(updatedLists);
      setDateError('');
    } catch (error) {
      console.error('Error adding new task:', error);
    }
  };

  const toggleTaskCompletion = async (listIndex, taskIndex) => {
    try {
      const listId = lists[listIndex]._id;
      const taskId = lists[listIndex].tasks[taskIndex]._id;

      const response = await fetch(`http://localhost:5000/api/lists/${listId}/tasks/${taskId}/toggle`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) throw new Error('Error updating task completion status');

      const updatedList = await response.json();
      const updatedLists = [...lists];
      updatedLists[listIndex] = updatedList;
      setLists(updatedLists);
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const handleTaskInputChange = (index, value) => {
    const updatedLists = [...lists];
    updatedLists[index].newTask = value;
    setLists(updatedLists);
    if (dateError) setDateError('');
  };

  const handleTaskDueDateChange = (index, value) => {
    const updatedLists = [...lists];
    updatedLists[index].newTaskDueDate = value;
    setLists(updatedLists);
    if (dateError) setDateError('');
  };

  const deleteList = async (index) => {
    try {
      const listId = lists[index]._id;
      const response = await fetch(`http://localhost:5000/api/lists/${listId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      if (!response.ok) throw new Error('Error deleting list');

      const updatedLists = lists.filter((_, i) => i !== index);
      setLists(updatedLists);
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  const startEditingListName = (index) => {
    setEditingListIndex(index);
    setEditingListName(lists[index].name);
  };

  const updateListName = async () => {
    const listId = lists[editingListIndex]?._id;
    try {
      const response = await fetch(`http://localhost:5000/api/lists/${listId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ name: editingListName }),
      });
      if (!response.ok) throw new Error('Error updating list name');
      const updatedList = await response.json();
      const updatedLists = [...lists];
      updatedLists[editingListIndex] = updatedList;
      setLists(updatedLists);
      setEditingListIndex(null);
      setEditingListName('');
    } catch (error) {
      console.error('Error updating list name:', error);
    }
  };

  const deleteTask = async (listIndex, taskIndex) => {
    try {
      const taskId = lists[listIndex].tasks[taskIndex]._id;
      const response = await fetch(`http://localhost:5000/api/lists/${lists[listIndex]._id}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Error deleting task');
      const updatedLists = [...lists];
      updatedLists[listIndex].tasks = updatedLists[listIndex].tasks.filter((_, i) => i !== taskIndex);
      setLists(updatedLists);
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  };

  const startEditingTaskName = (listIndex, taskIndex, taskName) => {
    setEditingTaskIndex({ list: listIndex, task: taskIndex });
    setEditingTaskName(taskName);
  };

  const startEditingTaskDueDate = (listIndex, taskIndex, taskDueDate) => {
    setEditingTaskIndex({ list: listIndex, task: taskIndex });
    setEditingTaskDueDate(taskDueDate);
  };

  const updateTaskName = async (listIndex, taskIndex) => {
    const listId = lists[listIndex]._id;
    const taskId = lists[listIndex].tasks[taskIndex]._id;

    try {
      const response = await fetch(`http://localhost:5000/api/lists/${listId}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ name: editingTaskName }), 
      });
      if (!response) throw new Error('Error updating task name');
      const updatedList = await response.json();
      const updatedLists = [...lists];
      updatedLists[listIndex].tasks[taskIndex].name = editingTaskName;
      setLists(updatedLists);
      setEditingTaskIndex(null);
      setEditingTaskName('');    
    } catch (error) {
      console.error('Error updating task name:', error);
    }
  };

  const updateTaskDueDate = async (listIndex, taskIndex) => {
    const listId = lists[listIndex]._id;
    const taskId = lists[listIndex].tasks[taskIndex]._id;

    if (!isValidFutureDate(editingTaskDueDate)) {
      setDateError('Due date must be today or in the future');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/lists/${listId}/tasks/${taskId}/duedate`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ dueDate: editingTaskDueDate }), 
      });
      if (!response) throw new Error('Error updating task due date');
      const updatedList = await response.json();
      const updatedLists = [...lists];
      updatedLists[listIndex].tasks[taskIndex].dueDate = editingTaskDueDate;
      setLists(updatedLists);
      setEditingTaskIndex(null);
      setEditingTaskDueDate('');
      setDateError('');    
    } catch (error) {
      console.error('Error updating task due date:', error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Handle empty or undefined dates
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Extract only the date part
  };

  return (
    <div className='min-h-screen p-8'>
      {/* Section to add new list */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          className="border p-2 w-11/12"
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

      {/* Lists and tasks */}
      {lists.map((list, listIndex) => (
        <div key={list._id} className="bg-white border p-4 mb-4">
          {/* List title and actions */}
          {editingListIndex === listIndex ? (
            <div className="flex items-center gap-4">
              <input
                type="text"
                className="border p-2 flex-1"
                value={editingListName}
                onChange={(e) => setEditingListName(e.target.value)}
              />
              <button
                onClick={updateListName}
                className="bg-green-600 text-white p-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditingListIndex(null)}
                className="bg-gray-400 text-white p-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{list.name}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => startEditingListName(listIndex)}
                  className="p-2"
                >
                  <img src={editIcon} alt="Edit" className="h-5 w-5" />
                </button>
                <button
                  onClick={() => deleteList(listIndex)}
                  className="p-2"
                >
                  <img src={deleteIcon} alt="Delete" className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Add task */}
          <div className="flex gap-4 mt-4">
            <input
              type="text"
              className="border p-2 flex-1"
              placeholder="Enter new task"
              value={list.newTask || ''}
              onChange={(e) => handleTaskInputChange(listIndex, e.target.value)}
            />
            <input
              type="date"
              className="border p-2"
              value={list.newTaskDueDate || ''}
              min={new Date().toISOString().split('T')[0]} // Set min date to today
              onChange={(e) => handleTaskDueDateChange(listIndex, e.target.value)}
            />
            <button
              onClick={() => addNewTask(listIndex)}
              className="bg-blue-600 text-white p-2"
            >
              Add Task
            </button>
          </div>
          {dateError && (
            <div className="text-red-500 mt-2">{dateError}</div>
          )}

          {/* Tasks */}
          <ul className="mt-4">
            {list.tasks.map((task, taskIndex) => {
              const isPassed = isDatePassed(task.dueDate);
              const isCompleted = task.completed;
              
              return (
                <li
                  key={task._id}
                  className={`p-2 flex items-center justify-between ${
                    isCompleted ? 'line-through text-gray-500' : ''
                  } ${
                    isPassed && !isCompleted ? 'bg-red-100 border-l-4 border-red-500' : ''
                  }`}
                >
                  {/* Task name */}
                  {editingTaskIndex?.list === listIndex &&
                  editingTaskIndex?.task === taskIndex ? (
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        className="border p-2 flex-1"
                        value={editingTaskName}
                        onChange={(e) => setEditingTaskName(e.target.value)}
                      />
                      <input
                        type="date"
                        className="border p-2"
                        value={editingTaskDueDate}
                        min={new Date().toISOString().split('T')[0]} // Set min date to today
                        onChange={(e) => setEditingTaskDueDate(e.target.value)}
                      />
                      <button
                        onClick={() => {
                          updateTaskName(listIndex, taskIndex);
                          updateTaskDueDate(listIndex, taskIndex);
                        }}
                        className="bg-green-600 text-white p-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingTaskIndex(null)}
                        className="bg-gray-400 text-white p-2"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <span>{task.name}</span>
                      <span className={`${
                        isPassed && !isCompleted ? 'text-red-500 font-bold' : ''
                      }`}>
                        {formatDate(task.dueDate)}
                        {isPassed && !isCompleted && ' (Overdue)'}
                      </span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        startEditingTaskName(listIndex, taskIndex, task.name)
                      }
                      className="p-2"
                    >
                      <img src={editIcon} alt="Edit" className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        startEditingTaskDueDate(
                          listIndex,
                          taskIndex,
                          task.dueDate
                        )
                      }
                      className="p-2"
                    >
                      <img src={updateIcon} alt="Update Due Date" className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => deleteTask(listIndex, taskIndex)}
                      className="p-2"
                    >
                      <img src={deleteIcon} alt="Delete" className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        toggleTaskCompletion(listIndex, taskIndex)
                      }
                      className={`p-2 ${
                        task.completed
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-400 text-white'
                      }`}
                    >
                      {task.completed ? 'Completed' : 'Mark Complete'}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AddNewList;