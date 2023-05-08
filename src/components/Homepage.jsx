import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage(props) {
    const showMovies = () => {
        // props.moviesArr.sort((a, b) => b.rating - a.rating)
        return props.moviesArr.map((val) => {
            return <div id='movieFrame'>
                <div style={{ backgroundImage: `url(${val.p})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', marginLeft: '0px', borderTopRightRadius: '17px', borderTopLeftRadius: '17px' }}> <br />
                    <div id='insideDiv'>
                        <p id='rating'>Rate this movie</p>
                        <div id='ratingDiv'>
                            <button className='ratingBtns' onClick={() => { val.ratingCounter++; val.rating += 1; console.log(props.moviesArr); props.setMoviesArr([...props.moviesArr]) }} value={1}>1</button>
                            <button className='ratingBtns' onClick={() => { val.ratingCounter++; val.rating += 2; console.log(props.moviesArr); props.setMoviesArr([...props.moviesArr]) }} value={2}>2</button>
                            <button className='ratingBtns' onClick={() => { val.ratingCounter++; val.rating += 3; console.log(props.moviesArr); props.setMoviesArr([...props.moviesArr]) }} value={3}>3</button>
                            <button className='ratingBtns' onClick={() => { val.ratingCounter++; val.rating += 4; console.log(props.moviesArr); props.setMoviesArr([...props.moviesArr]) }} value={4}>4</button>
                            <button className='ratingBtns' onClick={() => { val.ratingCounter++; val.rating += 5; console.log(props.moviesArr); props.setMoviesArr([...props.moviesArr]) }} value={5}>5</button>
                        </div>
                        <p>Total Rating: {val.rating==0?0:(val.rating / val.ratingCounter).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        })
    }
    const showRating = (r,r2) => {
        return r/r2
    }


    return (
        <div>
            <h1 id='welcomeMSG'>Welcome to Movie Rating App</h1>
            <Link to='/add'><button id='addNewMovieBtn'>add new movie</button></Link>
            <br />
            <div id='allMovies'>
                {showMovies()}
            </div>
        </div>
    )
}
