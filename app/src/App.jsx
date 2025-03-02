/* 
GifSearch is a controlled form that sets a search term to find gifs
GifContainer must take the search term and then fetch gifs according from the search/ endpoint

TODO:
- Share the searchTerm state set by the GifSearch form with the GifContainer
*/

import NavBar from './components/NavBar';
import GifContainer from './components/GifContainer';
import GifSearch from './components/GifSearch';
import { useState } from 'react';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch setGifs={setGifs} error={error} setError={setError} />
        <br />
        <GifContainer gifs={gifs} setGifs={setGifs} setError={setError} />
      </div>
    </div>
  );
};

export default App;
