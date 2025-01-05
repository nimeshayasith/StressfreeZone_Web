import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoGallery = () => {
  const [category, setCategory] = useState('Movements'); // Default category
  const [videos, setVideos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch videos based on the selected category
  const fetchVideos = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/videos/${category}`);
      setVideos(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Error fetching videos');
    }
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    fetchVideos(selectedCategory);
  };

  // Fetch videos on component mount or category change
  useEffect(() => {
    fetchVideos(category);
  }, [category]);

  return (
    <div className="min-h-screen w-full px-8 py-12 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Video Gallery</h1>
      <div className="mb-6">
        <label htmlFor="category" className="block text-lg font-semibold mb-2">
          Select Category
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="w-full max-w-xs px-4 py-2 text-gray-900 border rounded-md"
        >
          <option value="Movements">Movements</option>
          <option value="Meditation">Meditation</option>
          <option value="Soundscape">Soundscape</option>
          <option value="WorkRelief">Work Relief</option>
          <option value="LearnMore">Learn More</option>
        </select>
      </div>
      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
          {errorMessage}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video._id} className="bg-gray-700 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{video.description}</p>
            <video
              controls
              src={video.url}
              className="w-full rounded-md"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;