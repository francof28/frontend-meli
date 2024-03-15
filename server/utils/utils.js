const axios = require('axios');

function formatItems(items) {
    const formattedItems = {
        author: {
            name: 'Franco',
            lastname: 'Fatala'
        },
        categories: items.map(item => item.category_id),
        items: items.map(item => ({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 0
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping
        }))
    };

    return formattedItems;
}

async function getItemData(id) {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al consultar la API de MercadoLibre:', error.message);
        throw new Error('Ocurrió un error al consultar la API de MercadoLibre');
    }
}

async function getItemDescription(id) {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
        return response.data.plain_text;
    } catch (error) {
        console.error('Error al obtener la descripción del ítem:', error.message);
        throw new Error('Ocurrió un error al obtener la descripción del ítem');
    }
}

function formatItemData(itemData, description) {
    return {
        author: {
            name: 'Franco',
            lastname: 'Fatala'
        },
        item: {
            id: itemData.id,
            title: itemData.title,
            price: {
                currency: itemData.currency_id,
                amount: itemData.price,
                decimals: 0
            },
            picture: itemData.thumbnail,
            condition: itemData.condition,
            free_shipping: itemData.shipping.free_shipping,
            sold_quantity: itemData.sold_quantity || 0,
            description: description
        }
    };
}

module.exports = {
    formatItems,
    getItemData,
    getItemDescription,
    formatItemData
};
