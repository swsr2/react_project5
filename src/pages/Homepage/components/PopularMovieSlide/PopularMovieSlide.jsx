import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { responsive } from '../../../../constants/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const PopularMovieSlide = () => {
    const { data } = usePopularMoviesQuery()

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
