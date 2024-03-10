import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPost, getPosts, getUsers } from "./api";
import { queryClient } from "./queryClient";
import { Post } from "../types/Posts";

export const usePosts = () => {
    const query = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts
    });
    return query;
}

export const usePost = (id:number) => useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id)
});

export const useUsers = () => {
    const query = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    });
    return query;
}

export const useUsersPrefetch = async () => {
    const queryClient = useQueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: getUsers
    });
}

export const invalidatePopts = () => {
    queryClient.invalidateQueries({
        queryKey: ['posts']
    });
    
}
