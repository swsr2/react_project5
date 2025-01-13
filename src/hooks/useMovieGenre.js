import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
const fetchMovieGenre = () => {
    return api.get(`/genre/movie/list`)

}
export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (result) => result.data.genres,
        // 업데이트 자주X  
        staleTime: 500000,
    })
}