import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
const fetchMovieReview = (id) => {
    return api.get(`/movie/${id}/reviews`)

}
export const useMovieReviewQuery = (id) => {
    console.log("api id", id)
    return useQuery({
        queryKey: ['movie-review', id],
        queryFn: () => fetchMovieReview(id),
        select: (result) => result.data,
        staleTime: 500000,
    })
}