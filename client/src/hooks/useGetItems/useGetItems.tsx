import { getItems } from "../../services/getItems"
import { useQuery } from "react-query"

export const useGetItems = (searchParam: string | null) => {
    return useQuery({
        queryKey: ['items', searchParam],
        queryFn: () => getItems(searchParam),
        enabled: searchParam !== null && searchParam !== ''
    })
}