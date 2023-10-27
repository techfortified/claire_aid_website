import { authAxios } from "@/config";
import useSWR from "swr";


export const getVolunteers = async(accessToken) => {
    try {
        authAxios.accessToken = accessToken
        const result = await authAxios.get("/volunteers")
        return result.data?.data
    } catch (error) {
        throw error
    }
}

export const useVolunteers = (accessToken) => {
    const result = useSWR(["/volunteers",accessToken], ([_, token]) => getVolunteers(token),{keepPreviousData: true});
    const isError = !result.data && result.error ? true : false
    return { ...result, isError };
}