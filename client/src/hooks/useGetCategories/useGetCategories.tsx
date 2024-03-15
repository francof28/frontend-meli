import { getCategories } from "../../services/getCategories"
import { useQuery } from "react-query"

export const useGetCategories = (id: string | undefined) => {
    return useQuery({
        queryKey: ['categories', id],
        queryFn: () => getCategories(id),
        enabled: id !== null && id !== '' && id !== undefined
    })
}