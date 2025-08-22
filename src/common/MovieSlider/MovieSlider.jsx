import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
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
        itemClass="custom-carousel-item"
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
