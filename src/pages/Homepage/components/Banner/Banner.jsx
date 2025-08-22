import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import "./Banner.style.css"

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    console.log('banner-data', data)

    if (isLoading) {
        <h1>Loading...</h1>
    }
    if (isError) {
        <Alert variant="danger">{error.message}</Alert>
    }

    const truncateOverview = (text, maxLength) => {
        if (text?.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    const overviewText = truncateOverview(data?.results[0]?.overview, 150);


    return (
        // eslint-disable-next-line no-useless-concat
        <div style={{ backgroundImage: "url(" + `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}` + ")" }} className='banner'>
            <div className='text-white banner-text-area'>
                <h1>{data?.results[0].title}</h1>
                <p>{overviewText}</p>
            </div>
            
        </div>
    )
}

export default Banner
