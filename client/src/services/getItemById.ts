import axios from "axios";
import { API_ITEM_BY_ID } from "./constants";

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
    sold_quantity: number;
    description: string;
}

interface Author {
    name: string;
    lastname: string;
}

interface GetItemsByIdResponse {
    author: Author;
    item: Item;
}

type GetItemsById = (
    itemId: string
) => Promise<GetItemsByIdResponse>;

export const getItemById: GetItemsById = async (itemId): Promise<GetItemsByIdResponse>  => {
    const url = API_ITEM_BY_ID.concat(`${itemId}`)

    const response = await axios.get(url);

    return response.data
}