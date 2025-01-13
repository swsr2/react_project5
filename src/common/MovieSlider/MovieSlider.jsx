import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';


const MovieSlider = ({ title, movies, responsive }) => {
    // console.log("test", title, movies)
    return (
            <div className='movielist-area'>
            <h3>{title}</h3>
                            <Carousel
                            centerMode={true}
                            infinite={true}
                            // showDots={true}
                            // arrows={true}
                            // draggable={true}
                            // slidesToSlide={1} 
                            itemClass="movie-slider p-1"
                            containerClass="carousel-container"
                            responsive={responsive}
                            >
                            {movies.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
                            </Carousel>
            </div>
    )
}

export default MovieSlider
