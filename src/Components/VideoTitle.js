import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' w-screen aspect-video  pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-2xl font-medium  md:text-4xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4 font-medium'>
        {overview}
      </p>
      <div>
        <button className='bg-white text-black  py-1 md:py-4 px-3 md:px-12 text-xl  rounded-md hover:bg-opacity-60 transition-all'>
          Play
        </button>
        <button className='hidden md:inline-block mx-2  bg-gray-500 text-white p-3 px-10 text-xl bg-opacity-50 rounded-md hover:bg-slate-300 hover:text-black transition-all'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
