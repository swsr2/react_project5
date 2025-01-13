import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// 영화 추천 API 호출 함수
const fetchRecommendations = (id) => {
    return api.get(`/movie/${id}/recommendations`);
};

// React Query Hook: 영화 추천 데이터 가져오기
export const useRecommendationQuery = (id) => {
    return useQuery({
        queryKey: ['movie-recommendation', id],
        queryFn: () => fetchRecommendations(id),
        select: (result) => result.data,
        staleTime: 500000, // 데이터 재검증 대기 시간
    });
};
