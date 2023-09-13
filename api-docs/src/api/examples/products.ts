import { Product } from '../types/index.js';
import { COLLECTIONS } from '../enums.js';
import { fetchItems } from '../utils/fetchItems.js';
import { fetchItem } from '../utils/fetchItem.js';
import { logResult } from '../../logResult.js';

// get all products
// logResult(await fetchItems<Product>(COLLECTIONS.PRODUCTS));

// getAllProductsWithFilters
// logResult(
//   await fetchItems<Product>(COLLECTIONS.PRODUCTS, {
//     filter: {
//       price: { _gte: '220' },
//     },
//   })
// );

// get single product
// logResult(await fetchItem(COLLECTIONS.PRODUCTS, { id: 2 }));

// product with rating equal to 5
// logResult(
//   await fetchItems<Product>(COLLECTIONS.PRODUCTS, {
//     filter: {
//       average_customer_rating: { _eq: '5' },
//     },
//   })
// );

// product with some specific attributes
// logResult(
//   await fetchItems<Product>(COLLECTIONS.PRODUCTS, {
//     filter: {
//       attributes: {
//         // @ts-ignore
//         value: { _eq: 'Rackmount' },
//         id: { _eq: 2 },
//       },
//     },
//   })
// );
