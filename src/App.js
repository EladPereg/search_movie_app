import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Homepage from './components/Homepage';
import AddMovie from './components/AddMovie';

function App() {
  const [moviesArr, setMoviesArr] = useState([
    { name: 'The Expendables 1', p: `https://www.edb.co.il/photos/132982010_poster.poster.jpg`, rating: 0, ratingCounter: 0 },
    { name: 'The Expendables 2', p: `https://www.edb.co.il/photos/277842012_poster.poster.jpg`, rating: 0, ratingCounter: 0 },
    { name: 'The Expendables 3', p: `https://www.edb.co.il/photos/290022014_poster02.poster.jpg`, rating: 0, ratingCounter: 0 },
    { name: 'Olympus Has Fallen', p: `https://www.edb.co.il/photos/285232013_poster02.poster.jpg`, rating:0, ratingCounter: 0 },
    { name: 'London Has Fallen', p: `https://www.edb.co.il/photos/112012015_poster02.poster.jpg`, rating: 0, ratingCounter: 0 },
    { name: 'White House Down', p: `https://www.edb.co.il/photos/286062013_poster04.poster.jpg`, rating: 0, ratingCounter: 0 },
    { name: 'Angel Has Fallen', p: `https://www.edb.co.il/photos/156732019_poster02.poster.jpg`, rating: 0, ratingCounter: 0 },
    { name: 'Final Score', p: `https://www.edb.co.il/photos/152902018_poster01.poster.jpg`, rating: 0, ratingCounter: 0 },
  ])

  const addNewMovie = (n, p) => {
    setMoviesArr([{ name: n, p: p, rating: 0, ratingCounter: 0 }, ...moviesArr])
  }

  console.log(moviesArr)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Homepage moviesArr={moviesArr} setMoviesArr={setMoviesArr} />} />
          <Route path='/add' element={<AddMovie addNewMovie={addNewMovie} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

