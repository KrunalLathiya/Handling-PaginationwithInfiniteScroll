import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts } from '../services/postService';

export const useInfinitePosts = () => {
    return useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length === 0) return undefined;
            return allPages.length + 1;
        },
    });
};