import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import { useNavigate } from 'react-router-dom'
const MovieCard = ({ movie }) => {
    // console.log("movie", movie)

    const { data: genreData } = useMovieGenreQuery()
    // console.log("장르", genreData )
    const navigate = useNavigate()
    const showGenre = (genreIdList) => {
    if (!genreData) return [];
    return genreIdList.map((id) => {
        const genreObj = genreData.find((genre) => genre.id === id); 
        return genreObj ? genreObj.name : "Unknown Genre";
    });
    };
    // 디테일 페이지 
    const movieDetail = () => {
        let id = movie.id
        navigate(`/movie/${id}`)
    }
    return (
        // eslint-disable-next-line
        <div style={{ backgroundImage: "url("+`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+")"}} className='movie-card'onClick={movieDetail} >
            <div className='overlay'>
                <h3>{movie.title}</h3>
                {showGenre(movie.genre_ids).map((genre, index) => (<Badge bg="danger" style={{ marginRight: '10px' }} key={index}>{genre}</Badge>))}
            
                <div className='movie-explain'>
                    <div>
                        <FontAwesomeIcon icon={faStar} color='yellow'/> {movie.vote_average}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHeart} color='red'/> {movie.popularity}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} color='grey'/> {movie.adult?'over18':'under18'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
