import React from 'react'
import "react-multi-carousel/lib/styles.css";
import { useTopMoviesQuery } from '../../../../hooks/useTopMovies';
import { responsive } from '../../../../constants/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const TopMovieSlide = () => {
    const { data } = useTopMoviesQuery() 

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
