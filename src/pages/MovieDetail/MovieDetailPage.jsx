import React from 'react'
import DetailMovieCard from '../../common/DetailMovieCard/DetailMovieCard'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import { Alert, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const MovieDetailPage = () => {
    const id = useParams()
    
    const { data: detail, isError, error, isLoading } = useMovieDetailQuery(id)
    // console.log("하하하하", detail)

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
    
    return (
        <div>
            <DetailMovieCard detail={detail} />
        </div>
    )
}

export default MovieDetailPage
