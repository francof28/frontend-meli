import { useQuery } from "react-query";

import { getCategories } from "@services/index";

export const useGetCategories = (id: string | undefined) => {
    return useQuery({
        queryKey: ['categories', id],
        queryFn: () => getCategories(id),
        enabled: id !== null && id !== '' && id !== undefined,
        retry: false
    })
}