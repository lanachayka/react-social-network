import { instance, GetItemsType } from './api';
import { AxiosResponse } from 'axios';

type FollowRequestType = {
    userId: number
}

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id: number) {
        return instance.post<FollowRequestType, AxiosResponse<ResponseType>>(`follow/${id}`)
            .then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete<FollowRequestType, AxiosResponse<ResponseType>>(`follow/${id}`)
            .then(response => response.data);
    },
}