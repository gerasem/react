import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9a586ed4-f2cf-4a28-a8ca-85406d409808'
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getUser(userId) {
        return instance.get(`/profile/` + userId).then(response => {
            return response.data
        })
    },
    authMe() {
        return instance.get(`auth/me`).then(response => {
                if(response.data.resultCode === 0) {
                    return response.data
                }
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    }
}
