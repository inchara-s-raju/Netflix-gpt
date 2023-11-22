import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';
const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  // fetch trailer video and updating to store
  const getMovieVideos = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + id + '/videos',
      API_OPTIONS
    );
    const json = await data.json();
    const filteredTrailer = json.results.filter(
      (video) => video.name === 'Official Trailer'
    );
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
