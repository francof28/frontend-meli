import { API_ITEMS } from "./constants";
import { publicAxiosInstance } from "./axios";

export interface Price {
    currency: string;
    amount: number;
    decimals: number;
}

export interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
}

interface Author {
    name: string;
    lastname: string;
}

interface GetItemsResponse {
    author: Author;
    categories: string[];
    items: Item[];
}

type GetItems = (
    item: string | null
) => Promise<GetItemsResponse>;

export const getItems: GetItems = async (item): Promise<GetItemsResponse> => {
    const url = API_ITEMS.concat(`${item}`)

    return await publicAxiosInstance.get(url);
}