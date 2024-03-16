import { useQuery } from "react-query";

import { getItems } from "@services/index";

export const useGetItems = (searchParam: string | null) => {
    return useQuery({
        queryKey: ['items', searchParam],
        queryFn: () => getItems(searchParam),
        enabled: searchParam !== null && searchParam !== '',
        retry: false
    })
}