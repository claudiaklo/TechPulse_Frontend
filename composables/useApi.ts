export const useApi = () => {
    const config = useRuntimeConfig()

    return {
        get: async <T>(endpoint: string, params?: any) => {
            return await useFetch<T>(endpoint, {
                baseURL: config.public.apiBase,
                params
            })
        }
    }
}
