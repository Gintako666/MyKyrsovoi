import { Article } from '../types/index.js';
import { COLLECTIONS } from '../enums.js';
import { fetchItems } from '../utils/fetchItems.js';
import { fetchItem } from '../utils/fetchItem.js';
import { logResult } from '../../logResult.js';

// get all articles
// logResult(await fetchItems<Article>(COLLECTIONS.ARTICLE));

// get single article
// logResult(await fetchItem(COLLECTIONS.ARTICLE, {
//   id: '166e7b2e-8a58-40b5-80fb-3c4d05bd03a3'
// }));

// get articles with name that contains 'Coffee'
// logResult(
//   await fetchItems<Article>(COLLECTIONS.ARTICLE, {
//     filter: {
//       name: { _contains: 'Coffee' },
//     },
//   })
// );
