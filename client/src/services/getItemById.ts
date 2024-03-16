import { API_ITEM_BY_ID } from "./constants";
import { publicAxiosInstance } from "./axios";

interface Price {
    currency: string;
    amount: number;
    decimals: number;
}

export interface Item {
    id: string;
    category_id: string,
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
    itemId: string | undefined
) => Promise<GetItemsByIdResponse>;

export const getItemById: GetItemsById = async (itemId): Promise<GetItemsByIdResponse>  => {
    const url = API_ITEM_BY_ID.concat(`${itemId}`)

    return await publicAxiosInstance.get(url);
}