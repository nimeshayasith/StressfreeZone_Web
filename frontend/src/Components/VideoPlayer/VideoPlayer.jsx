import React from 'react';
import sampleVideo from '../../assets/sample-video.mp4'; // Adjust the path if necessary

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <video
        className="w-full max-w-2xl rounded-lg shadow-lg"
        controls
        autoPlay
        loop
        muted
      >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
