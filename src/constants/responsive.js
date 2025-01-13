export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Display only 1 item on mobile
        slidesToSlide: 1, // Move 1 slide at a time
        centerMode: true, // Center the single visible slide
    },
};