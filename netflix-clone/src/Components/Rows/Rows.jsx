// components/Rows/Rows.jsx
import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import axios from '../../utils/axios';
import './Rows.css';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        const response = await axios.get(fetchUrl);
        if (!Array.isArray(response.data.results)) {
          throw new Error('Unexpected API response format');
        }
        setMovies(response.data.results);
      } catch (err) {
        console.error('Failed to fetch movies:', err);
        setError('Failed to load movies');
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(''); // close trailer if already open
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          if (!url) {
            setError('Trailer not found');
            return;
          }
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          setError(null);
        })
        .catch((err) => {
          console.error('Error finding trailer:', err);
          setError('Trailer not found');
        });
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1 },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      {error && <p className='error-message'>{error}</p>}
      <div className='row__posters'>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            const imagePath = isLargeRow ? movie.poster_path : movie.backdrop_path;
            if (!imagePath) return null;

            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
                src={`${BASE_IMG_URL}${imagePath}`}
                alt={movie.title || movie.name || 'Movie poster'}
                loading="lazy"
              />
            );
          })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
