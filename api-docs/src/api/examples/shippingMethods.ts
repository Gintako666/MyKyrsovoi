import { ShippingMethods } from '../types/index.js';
import { COLLECTIONS } from '../enums.js';
import { fetchItems } from '../utils/fetchItems.js';
import { fetchItem } from '../utils/fetchItem.js';
import { logResult } from '../../logResult.js';

// get all shipping methods
// logResult(await fetchItems<ShippingMethods>(COLLECTIONS.SHIPPING_METHODS));

// get single shipping method
// logResult(await fetchItem(COLLECTIONS.SHIPPING_METHODS, {
//   id: 'ce6168f3-74dc-400a-8480-9c415c4856e3'
// }));

// get shipping methods with shipping_method equal to 'FedEx'
// logResult(
//   await fetchItems<ShippingMethods>(COLLECTIONS.SHIPPING_METHODS, {
//     filter: {
//       shipping_method: { _eq: 'FedEx' },
//     },
//   })
// );
