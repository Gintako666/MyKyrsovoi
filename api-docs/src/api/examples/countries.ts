import { Country } from '../types/index.js';
import { COLLECTIONS } from '../enums.js';
import { fetchItems } from '../utils/fetchItems.js';
import { fetchItem } from '../utils/fetchItem.js';
import { logResult } from '../../logResult.js';

// get all countries
// logResult(await fetchItems<Country>(COLLECTIONS.COUNTRIES));

// get single country
// logResult(await fetchItem(COLLECTIONS.COUNTRIES, {
//   code: 'NL'
// }));

// get countries with name containing 'U'
// logResult(
//   await fetchItems<Country>(COLLECTIONS.COUNTRIES, {
//     filter: {
//       name: { _contains: 'U' },
//     },
//   })
// );
