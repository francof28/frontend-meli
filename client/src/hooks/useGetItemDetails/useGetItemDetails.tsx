import { useQuery } from "react-query";

import { getItemById } from "@services/index";

export const useGetItemDetails = (id: string | undefined) => {
    return useQuery({
        queryKey: ['item', id],
        queryFn: () => getItemById(id),
        enabled: id !== null && id !== '',
        retry: false,
    })
}