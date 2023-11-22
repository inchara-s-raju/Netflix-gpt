import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-52 pr-4 hover:cursor-pointer hover:scale-95'>
      <img alt='Movie poster' src={IMG_CDN + posterPath}></img>
    </div>
  );
};

export default MovieCard;
