import { Price } from '@services/getItems'

const currency: Record<string,string> = {
    'ARS': '$',
    'USD': 'US$'
}

export const formatPrice = (price: Price) => {
    return `${currency[price.currency] + price.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}