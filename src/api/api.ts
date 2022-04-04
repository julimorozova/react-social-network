import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "c111fd93-5f7c-4501-bd41-914578f301f3"}
});


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const follow = (id: string) => {
    return instance.post(`/follow/${id}`)
}
export const unfollow = (id: string) => {
    return instance.delete(`/follow/${id}`)
}


