import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// hook으로 만들면 나중에 쉽게 가져다 쓸수 있고 세분화(구분)할수 있다. 
const fetchPopularMovies = () => {
    return api.get(`/movie/popular`)
}
export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data,
    })
}