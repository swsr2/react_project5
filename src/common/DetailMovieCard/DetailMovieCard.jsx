import React, { useState } from 'react';
import { Container, Row, Col, Badge, Button, Modal, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';
import { useMovieReviewQuery } from '../../hooks/useMovieReview';
import { useRecommendationQuery } from '../../hooks/useRecommendations';
import { useMovieTrailerQuery } from '../../hooks/useMovieTrailer';
import ReviewItem from './ReviewItem';
import Recommendations from './Recommendations';
import './DetailMovieCard.style.css';

const DetailMovieCard = ({ detail }) => {
    const movieDetailId = detail?.id;

    // Fetch data
    const { data: reviewData } = useMovieReviewQuery(movieDetailId);
    const { data: recommendationsData } = useRecommendationQuery(movieDetailId);
    const { data: trailerData, isLoading: isTrailerLoading } = useMovieTrailerQuery(movieDetailId);

    // console.log("예고편데이터", trailerData)

    const [showReviews, setShowReviews] = useState(false);
    const [showRecommendation, setRecommendation] = useState(false);
    const [show, setShow] = useState(false); // Modal state

    // Toggle reviews
    const review = () => {
        setShowReviews((prev) => !prev);
        if (showRecommendation) {
            setRecommendation(false);
        }
    };

    // Toggle recommendations
    const recommendationMovies = () => {
        setRecommendation((prev) => !prev);
        if (showReviews) {
            setShowReviews(false);
        }
    };

    // Modal handlers
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Get the trailer video key
    const trailerKey =
        trailerData?.results?.find((video) => video.type === 'Trailer' && video.site === 'YouTube')?.key;

    return (
        <Container>
            <Row>
                <Col lg={4} xs={12}>
                    <img
                        alt=""
                        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${detail?.poster_path}`}
                    />
                </Col>
                <Col lg={8} xs={12}>
                    {detail?.genres?.map((genre) => (
                        <Badge bg="danger" style={{ marginRight: '10px' }}>
                            {genre.name}
                        </Badge>
                    ))}
                    <h1>{detail?.title}</h1>
                    <div className="movie-explain">
                        <div>
                            <FontAwesomeIcon icon={faStar} color="yellow" /> {detail?.vote_average}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHeart} color="red" /> {detail?.popularity}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUser} color="grey" />{' '}
                            {detail?.adult ? 'over18' : 'under18'}
                        </div>
                    </div>
                    <hr className="divider-line" />
                    <p className="overview">{detail?.overview}</p>
                    <hr className="divider-line" />
                    <div className="extra-data">
                        <div>
                            <Badge bg="light" text="dark" style={{ marginRight: '10px' }}>
                                Budget
                            </Badge>
                            $ {detail?.budget}
                        </div>
                        <div>
                            <Badge bg="light" text="dark" style={{ marginRight: '10px' }}>
                                Release Date
                            </Badge>
                            {detail?.release_date}
                        </div>
                        <div>
                            <Badge bg="light" text="dark" style={{ marginRight: '10px' }}>
                                Run Time
                            </Badge>
                            {detail?.runtime}
                        </div>
                    </div>
                    <hr className="divider-line" />
                    <Button variant="primary" onClick={handleShow}>
                        트레일러 보기 
                    </Button>

                    {/* Modal for YouTube Trailer */}
                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title className="text-dark">트레일러 보기</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {isTrailerLoading ? (
                                <Spinner animation="border" />
                            ) : trailerKey ? (
                                <YouTube
                                    videoId={trailerKey}
                                    opts={{
                                        height: '390',
                                        width: '100%',
                                        playerVars: {
                                            autoplay: 1,
                                        },
                                    }}
                                />
                            ) : (
                                <p>No trailer available.</p>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>

            {/* Reviews */}
            <Row>
                <Col lg={1} xs={12}>
                    <Button variant="outline-secondary" onClick={review} className="button-row">
                        Reviews
                    </Button>
                </Col>
                <Col lg={11} xs={12}>
                    <Button
                        variant="outline-secondary"
                        onClick={recommendationMovies}
                        className="button-row"
                    >
                        Related Movies
                    </Button>
                </Col>
            </Row>

            {/* Reviews Section */}
            <Row>
                {showReviews && reviewData && reviewData.results?.length > 0 ? (
                    <Col xs={12} className="reviews-container">
                        {reviewData?.results?.map((review, index) => (
                            <ReviewItem key={index} review={review} />
                        ))}
                    </Col>
                ) : showReviews ? (
                    <Col xs={12} className="reviews-container">
                        <p>No reviews.</p>
                    </Col>
                ) : null}
            </Row>

            {/* Recommendations Section */}
            <Row>
                {showRecommendation && recommendationsData && recommendationsData.results?.length > 0 ? (
                    <Col xs={12} className="recommendations-container">
                        <Recommendations movies={recommendationsData.results} />
                    </Col>
                ) : showRecommendation ? (
                    <Col xs={12} className="recommendations-container">
                        <p>No Recommendation Movies.</p>
                    </Col>
                ) : null}
            </Row>
        </Container>
    );
};

export default DetailMovieCard;
