import React from 'react';
import Header from './Header';
import { useNowPlayingMovies } from '../Hooks/useNowPlayingMovies';
import { usePopularMovies } from '../Hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useTopRatedMovies } from '../Hooks/useTopRatedMovies';
import { useUpcomingMovies } from '../Hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GPTSearchPage from './GPTSearchPage';
const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGpt ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
