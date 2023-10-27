import { axiosPublic } from "@/config";
import useSWR, { mutate } from "swr";


export const LoginUser = async({username, password}) => {
    try {
        const result = await axiosPublic.post('/auth', {username, password})
        const data = result.data?.data
        return { isError: false, data, message: "Login successful" }
    } catch (error) {
        console.log(error)
        return {data: null, message: "Error occurred trying to process request, try again later", isError: true}
    }
}

export const logoutUser = async () => {
    try {
        const result = await axiosPublic.post('/auth?query=logout',{})
        return  result.data.data
    } catch (error) {
        throw error
    }
};
export const clearCache = () => mutate(() => true,undefined,{ revalidate: false })

export const loadAuthToken = async () => {
    try {
        const result = await axiosPublic.post('/auth?query=refresh_token',{})
        return  result.data.data
    } catch (error) {
        throw error
    }
};

export const useAuthUser = () => {
    const result = useSWR("/auth_user", loadAuthToken, {keepPreviousData: true, refreshInterval:300000});
    const isAuthenticated = result.data && !result.error ? true : false
    return { ...result, isAuthenticated };
}