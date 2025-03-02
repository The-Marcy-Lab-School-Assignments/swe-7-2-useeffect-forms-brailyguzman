/* eslint-disable react/prop-types */
/* 
This component is meant to contain a controlled form (a form whose input values) are controlled by a piece of React state (with useState). However, the final submitted value(s) of the form needs to be shared with the GifContainer so be careful about where you define your final submitted state!

TODO:
- Convert this form into a controlled form
- Handle form submissions by setting a searchTerm state value that can be shared with the GifContainer component
*/

import { useState } from 'react';
import { getGifsBySearch } from '../adapters/giphyAdapters.js';
import defaultGifs from '../gifs.json';

function GifSearch({ setGifs, setError }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    const [data, error] = await getGifsBySearch(searchTerm);

    console.log(data);

    if (error) {
      setError('Sorry but GIPHY API is not working, but here are some cats.');
      setGifs(defaultGifs);
    } else {
      setGifs(data);
    }

    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
}

export default GifSearch;
