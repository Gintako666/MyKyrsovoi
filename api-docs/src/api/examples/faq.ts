import { FAQ } from '../types/index.js';
import { COLLECTIONS } from '../enums.js';
import { fetchItems } from '../utils/fetchItems.js';
import { fetchItem } from '../utils/fetchItem.js';
import { logResult } from '../../logResult.js';

// get all faqs
// logResult(await fetchItems<FAQ>(COLLECTIONS.FAQ));

// get single faq
// logResult(await fetchItem(COLLECTIONS.FAQ, {
//   id: '340407a1-726d-408e-81d4-20827ee781e2'
// }));

// get faqs with question that contains 'security'
// logResult(
//   await fetchItems<FAQ>(COLLECTIONS.FAQ, {
//     filter: {
//       question: { _contains: 'security' },
//     },
//   })
// );
