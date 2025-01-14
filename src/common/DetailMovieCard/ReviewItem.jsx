import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ReviewItem = ({ index, review }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="review-item" style={{ margin: '10px 0' }}>
            <h5>{review?.author || 'Unknown'}</h5>
            <p>
                {isExpanded
                    ? review?.content
                    : review?.content.length > 300
                    ? `${review.content.slice(0, 300)}...`
                    : review?.content}
            </p>
            {review?.content.length > 300 && (
                <Button
                    variant="light"
                    onClick={toggleContent}
                    style={{
                        padding: '5px',
                        fontSize: '14px',
                        textDecoration: 'underline',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'white',
                    }}
                >
                    {isExpanded ? '닫기' : '더보기'}
                </Button>
            )}
            <hr />
        </div>
    );
}

export default ReviewItem
