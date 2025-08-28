import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import { responsive } from '../../../../constants/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const UpcomingMovieSlide = () => {
    const { data } = useUpcomingMoviesQuery() 

        if (!data || !data.results) {
            return <h1>No movies found</h1>;
        }
    return (
        <div>
            <MovieSlider title='Up Comming Movies'  movies={data.results} responsive={responsive} />
        </div>
    )
}

export default UpcomingMovieSlide
