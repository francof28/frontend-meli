import axios from "axios";
import { API_ITEMS } from "./constants";

interface Price {
    currency: string;
    amount: number;
    decimals: number;
}

interface Item {
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
    item: string
) => Promise<GetItemsResponse>;

export const getItems: GetItems = async (item): Promise<GetItemsResponse> => {
    const url = API_ITEMS.concat(`${item}`)

    const response = await axios.get(url);

    return response.data
}