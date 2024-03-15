import { getItemById } from "../../services/getItemById"
import { useQuery } from "react-query"

export const useGetItemDetails = (id: string | undefined) => {
    return useQuery({
        queryKey: ['item', id],
        queryFn: () => getItemById(id),
        enabled: id !== null && id !== ''
    })
}