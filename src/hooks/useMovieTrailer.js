import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useMovieTrailerQuery = (movieId) => {
    return useQuery({
        queryKey: ["movieTrailer", movieId],
        queryFn: async () => {
            const { data } = await api.get(`/movie/${movieId}/videos`);
            return data;
        },
        enabled: !!movieId,
    });
};
