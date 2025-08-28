import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";


const fetchUseUpcomingMovies = () => {
    return api.get('/movie/upcoming')
}

export const useUpcomingMoviesQuery = () => {
    return useQuery({
        queryKey: ['upcoming-movie'],
        queryFn: fetchUseUpcomingMovies,
        select: (result) => result.data,
        suspense: true,
    })
}

