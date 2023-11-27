import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-4/12 font-medium'>{overview}</p>
      <div>
        <button className='bg-white text-black p-3 px-14 text-xl  rounded-md hover:bg-opacity-60 transition-all'>
          Play
        </button>
        <button className='mx-2 bg-gray-500 text-white p-3 px-10 text-xl bg-opacity-50 rounded-md hover:bg-slate-300 hover:text-black transition-all'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
