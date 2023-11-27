import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
const GPTSearchPage = () => {
  return (
    <div className='bg-red-500'>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearchPage;
