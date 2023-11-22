import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { BG_IMAGE } from '../utils/constants';

const GPTSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10 opacity-90'>
        <img src={BG_IMAGE} alt='bg_img' />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearchPage;
