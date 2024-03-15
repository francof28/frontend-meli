const expresss = require('express');

const axios = require('axios');
const utils = require('../utils/utils')

const router = expresss.Router();

router.get('/api/items', async (req, res) => {
    try {
      const query = req.query.q;

      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

      const response = await axios.get(apiUrl);

      // We only want the first four items
      const firstFourItems = utils.formatItems(response.data.results.slice(0, 4));

      res.json(firstFourItems);
    } catch (error) {

      console.error('Error:', error.message);
      res.status(500).json({ error: 'Ocurrió un error al consultar la API de MercadoLibre' });
    }
});


router.get('/api/items/:id', async (req, res) => {
    try {
        const itemId = req.params.id;

        const itemData = await utils.getItemData(itemId);

        const description = await utils.getItemDescription(itemId);

        const formattedItem = utils.formatItemData(itemData, description);

        res.json(formattedItem);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Ocurrió un error al obtener el ítem' });
    }
});

module.exports = router;