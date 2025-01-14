import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';


const MovieSlider = ({ title, movies, responsive }) => {
    // console.log("test", title, movies)
    return (
        <div className="movielist-area">
            <h3>{title}</h3>
            <Carousel
                responsive={responsive}
                infinite={false}
                centerMode={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                arrows={true}
                // containerClass="carousel-container"
                itemClass="custom-carousel-item" // Add this prop
            >
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
            {/* <Carousel
                centerMode={false} 
                responsive={responsive}
                infinite={true}
                // swipeable={true}
                // draggable={true}
                arrows={true}
                containerClass="carousel-container"
                itemClass="movie-slider-item"
                // keyBoardControl={true}
                // removeArrowOnDeviceType={['tablet', 'mobile']}
                // focusOnSelect={true}
                // additionalTransfrom={0}
            >
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel> */}
        </div>

        
    )
}

export default MovieSlider
