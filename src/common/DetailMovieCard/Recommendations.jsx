import React from 'react';
import './Recommendations.style.css';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../../constants/responsive';

const Recommendations = ({ movies }) => {
    const navigate = useNavigate();

    const movieDetail = (id) => {
        navigate(`/movie/${id}`);
    };

    return (
        <div className="recommendations-slide">
            <Carousel
                centerMode={true}
                infinite={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        style={{
                            backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "300px",
                            width: "200px",
                            margin: "10px",
                        }}
                        className="movie-card"
                        onClick={() => movieDetail(movie.id)}
                    >
                        <div className="overlay">
                            <h4>{movie.title}</h4>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Recommendations;
