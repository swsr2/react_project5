import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
const fetchSearchMovie = ({ keyword, page }) => {
    return keyword ? api.get(`/search/movie?query=${keyword}&page=${page}>`) : api.get(`/movie/popular?page=${page}`);
}
export const useSearchMovieQuery = ({ keyword, page }) => {
    return useQuery({
        // 키워드에 따라 페이지가 달라짐
        queryKey: ['movie-search', { keyword, page }],
        queryFn: () => fetchSearchMovie({ keyword, page }),
        select: (result) => result.data
    })
}

// 장르 id 값에 따라 보여지게 수정