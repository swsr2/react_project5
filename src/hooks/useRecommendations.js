import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchRecommendations = (id) => {
    return api.get(`/movie/${id}/recommendations`);
};


export const useRecommendationQuery = (id) => {
    return useQuery({
        queryKey: ['movie-recommendation', id],
        queryFn: () => fetchRecommendations(id),
        select: (result) => result.data,
        staleTime: 500000, 
    });
};
