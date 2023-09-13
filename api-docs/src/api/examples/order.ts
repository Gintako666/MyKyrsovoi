import { Order } from '../types/index.js';
import { COLLECTIONS } from '../enums.js';
import { fetchItems } from '../utils/fetchItems.js';
import { fetchItem } from '../utils/fetchItem.js';
import { logResult } from '../../logResult.js';

// get all orders
// logResult(await fetchItems<Order>(COLLECTIONS.ORDER));

// get single order
// logResult(await fetchItem(COLLECTIONS.ORDER, {
//   id: '51b17b61-7f8f-4d58-81e7-88880bb66f4e'
// }));

// get orders with first_name inside shipping_address equal to 'Lukas'
// logResult(
//   await fetchItems<Order>(COLLECTIONS.ORDER, {
//     filter: {
//       shipping_address: {
//         // @ts-ignore
//         first_name: { _eq: 'Lukas' },
//       }
//     },
//   })
// );
