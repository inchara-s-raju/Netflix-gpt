import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 grid grid-cols-12 '>
        <input
          type='text'
          className='p-4 my-4 col-span-9 '
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className='py-2 px-4 my-4 bg-red-600 text-white  col-span-3'
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
