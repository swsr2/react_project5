import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchDiscoverMovie = ({ keyword, genre, page }) => {
    return api.get(`/discover/movie`, {
        params: {
            with_genres: genre,
            page: page,
            with_keywords: keyword,
        },
    });
};

// Custom hook to fetch movies with genre and page
export const useDiscoverMovieQuery = ({ keyword, genre, page }) => {
    return useQuery({
        queryKey: ['movie-detail', { keyword, genre, page }],
        queryFn: () => fetchDiscoverMovie({ keyword, genre, page }),
        select: (result) => result.data,
    });
};


