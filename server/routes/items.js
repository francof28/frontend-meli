const expresss = require('express');

const cors = require('cors');
const axios = require('axios');
const utils = require('../utils/utils')

const router = expresss.Router();

router.get('/api/items', cors() ,async (req, res) => {
    try {
      const query = req.query.q;

      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

      const response = await axios.get(apiUrl);

      const data = response.data;

      // We only want the first four items
      const items = data.results.slice(0, 4);

      // Filter categories with most results
      const categoryCounts = {};
      items.forEach(item => {
          const categoryId = item.category_id;
          if (categoryCounts[categoryId]) {
              categoryCounts[categoryId]++;
          } else {
              categoryCounts[categoryId] = 1;
          }
      });

      const sortedCategories = Object.keys(categoryCounts)
            .sort((a, b) => categoryCounts[b] - categoryCounts[a]);

      const topCategories = sortedCategories.slice(0, 4);

      res.json(utils.formatItems(items, topCategories));
    } catch (error) {

      console.error('Error:', error.message);
      res.status(500).json({ error: 'Ocurrió un error al consultar la API de MercadoLibre' });
    }
});


router.get('/api/items/:id', cors(), async (req, res) => {
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