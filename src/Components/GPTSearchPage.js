import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { BG_IMAGE } from '../utils/constants';
const GPTSearchPage = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img
          className='h-screen w-screen object-cover'
          src={BG_IMAGE}
          alt='logo'
        />
      </div>
      <div className=''>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearchPage;
