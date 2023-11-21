import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ filter, action }, { env, services }) => {
  const { ItemsService  } = services
  

	action('items.update', async ({payload, collection, keys }, {schema}) => {
    if (collection !== 'orders') return;

    if (payload.status === 'completed') {
      const orderId= keys[0];
      const ordersServise = new ItemsService(collection, {schema})

      const currentOrder = (await ordersServise.readByQuery({
        filter: {
          id : orderId
          
        },
        fields: ['items.items_count_id.*', 'items.items_count_id.item.*']
      }))[0]

      const newItems = currentOrder.items.map(item => ({
        count: item.items_count_id.count + item.items_count_id.item.count,
        item_id: item.items_count_id.item.id,
      }))

      const itemsServise = new ItemsService('items', {schema});

      newItems.forEach(item => {
        itemsServise.updateOne(item.item_id, {count: item.count})
      });

      ordersServise.deleteOne(orderId);
    }
	});
});
