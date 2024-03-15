const axios = require('axios');

function formatItems(items, categories) {
    const formattedItems = {
        author: {
            name: 'Franco',
            lastname: 'Fatala'
        },
        categories: categories,
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
            category_id: itemData.category_id,
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

async function searchCategories(categoriesArray) {
    try {
        const categoryPromises = categoriesArray.map(async (category) => {
            const categoryUrl = `https://api.mercadolibre.com/categories/${category}`;
            const categoryResponse = await axios.get(categoryUrl);
            return categoryResponse.data.name;
        });

        const categoryNames = await Promise.all(categoryPromises);
        return categoryNames;
    } catch (error) {
        console.error('Error al obtener las categorías:', error.message);
        throw new Error('Ocurrió un error al obtener las categorías');
    }
}

module.exports = {
    formatItems,
    getItemData,
    getItemDescription,
    formatItemData,
    searchCategories
};
