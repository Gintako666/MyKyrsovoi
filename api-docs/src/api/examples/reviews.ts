import { Review } from '../types/index.js';
import { COLLECTIONS } from '../enums.js';
import { fetchItems } from '../utils/fetchItems.js';
import { fetchItem } from '../utils/fetchItem.js';
import { logResult } from '../../logResult.js';

// get all reviews
// logResult(await fetchItems<Review>(COLLECTIONS.REVIEWS));

// get all reviews for product with id equal to 2
// logResult(
//   await fetchItems<Review>(COLLECTIONS.REVIEWS, {
//     filter: {
//       product: {
//         // @ts-ignore
//         id: { _eq: 2 },
//       },
//     },
//   })
// );

// get single review
// logResult(await fetchItem(COLLECTIONS.REVIEWS, { id: 4 }));
