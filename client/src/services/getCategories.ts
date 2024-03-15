import axios from "axios";

import { API_CATEGORIES } from "./constants";

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

    const response = await axios.get(url);

    return response.data;
}