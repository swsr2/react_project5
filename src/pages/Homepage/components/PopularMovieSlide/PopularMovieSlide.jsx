import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'bootstrap'
import { responsive } from '../../../../constants/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import Spinner from 'react-bootstrap/Spinner'

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
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
        <div>
            <MovieSlider title='Popular Movies'  movies={data.results} responsive={responsive} />
        </div>
    )
}

export default PopularMovieSlide
