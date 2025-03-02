/* eslint-disable react/prop-types */
/* 
This component is meant to display gifs. However, there are two different sets of gifs that this component can display, depending on the user's actions. At first, they should see trending gifs but after submitting a search term in the GifSearch form, they should see gifs related to their search.

TODO:
- use the getTrendingGifs adapter to fetch trending gifs on the first render
- each time the user submits the form in GifSearch, use the getGifsBySearch adapter to fetch gifs according to the search term.
- render the list of fetched gifs (or the defaultGifs) as list items with an `img` inside. Remember to give each list item a unique key!
- Bonus: if at any point an error is returned, render the default gifs again.
*/

import defaultGifs from '../gifs.json';
import { getTrendingGifs } from '../adapters/giphyAdapters';
import { useEffect } from 'react';

const GifContainer = ({ gifs, setGifs, error, setError }) => {
  useEffect(() => {
    const fetchTrendingGifs = async () => {
      console.log('I was called for whatever reason.');
      const [data, error] = await getTrendingGifs();

      console.log(data);

      if (error) {
        setError('Sorry but GIPHY API is not working, but here are some cats.');
        setGifs(defaultGifs);
      } else {
        setGifs(data);
      }
    };

    fetchTrendingGifs();
  }, [setGifs, setError]);

  return (
    <ul className="gif-container">
      {error && <p>{error}</p>}
      {gifs.map((gif) => (
        <li key={gif.id} className="gif-container-item">
          <img src={gif.images.original.url} alt="GIF" />
        </li>
      ))}
    </ul>
  );
};

export default GifContainer;
