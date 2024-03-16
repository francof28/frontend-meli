import { API_CATEGORIES } from "./constants";
import { publicAxiosInstance } from "./axios";

interface GetCategoriesResponse {
    id: string;
    name: string;
    children_categories: any;
}

type getCategories = (
    category: string | undefined
) => Promise<GetCategoriesResponse>;

export const getCategories: getCategories = async (category): Promise<GetCategoriesResponse> => {
    const url = API_CATEGORIES.concat(`${category}`)

    return await publicAxiosInstance.get(url);
}