import React, { useState } from 'react';
import axios from 'axios';
import logo_icon from '../../assets/logo1.svg';

const AdminHome = () => {
  // State for form input fields
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Movements', // Default category
    video: null,
  });

  // State for success and error messages
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle video file selection
  const handleFileChange = (e) => {
    setFormData({ ...formData, video: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (formData.title && formData.description && formData.category && formData.video) {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('video', formData.video);

      try {
        const response = await axios.post('http://localhost:5000/api/videos/upload', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        // Display success message
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        setFormData({ title: '', description: '', category: 'Movements', video: null });

        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (error) {
        setErrorMessage(error.response?.data?.error || 'Error uploading video');
        setSuccessMessage('');
      }
    } else {
      setErrorMessage('Please fill in all fields and upload a video.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-20 py-14 bg-gray-800">
      <div className="flex flex-col self-start max-md:max-w-full">
        <div className="flex gap-2.5 mt-10 self-start font-semibold text-white">
          <img src={logo_icon} alt="App Logo" className="w-16 h-16" />
          <div className="flex flex-col my-auto">
            <h1 className="text-2xl font-bold">CALM MIND</h1>
            <p className="mt-1.5 text-base">STRESS FREE ZONE</p>
          </div>
        </div>
        <div className="p-6">
          <form className="bg-white p-8 rounded-lg shadow-md mb-6 w-full max-w-3xl" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter video title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter video description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="Movements">Movements</option>
                <option value="Meditation">Meditation</option>
                <option value="Soundscape">Soundscape</option>
                <option value="WorkRelief">Work Relief</option>
                <option value="LearnMore">Learn More</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="video">
                Upload Video
              </label>
              <input
                type="file"
                id="video"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Upload Video
            </button>
          </form>
          {successMessage && (
            <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;