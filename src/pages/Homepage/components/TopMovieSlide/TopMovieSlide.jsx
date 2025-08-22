import React from 'react'
import { Alert } from 'bootstrap'
import "react-multi-carousel/lib/styles.css";
import { useTopMoviesQuery } from '../../../../hooks/useTopMovies';
import { responsive } from '../../../../constants/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import Spinner from 'react-bootstrap/Spinner'
const TopMovieSlide = () => {
    const { data, isError, isLoading, error } = useTopMoviesQuery() 
        if (isLoading) {
        return <div className='spinner-area'>
            <Spinner
                animation='border'
                variant='danger'
                style={{ width: "5rem", height: "5rem" }}
            />
        </div>
        }
        if (isError) {
            return <Alert variant="danger">{error.message}</Alert>
        }
        
        if (!data || !data.results) {
            return <h1>No movies found</h1>;
        }
    return (
        <div >
            <MovieSlider title='Top Movies'  movies={data.results} responsive={responsive} />  
        </div>
    )
}

export default TopMovieSlide
