import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">{video.title}</h2>
        <p className="mb-4">{video.description}</p>
        <p className="text-gray-600 italic">Category: {video.category}</p>

        <video
          className="w-full rounded-lg shadow-lg mt-4"
          controls
          autoPlay
          loop
          muted
        >
          <source src={URL.createObjectURL(video.video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
