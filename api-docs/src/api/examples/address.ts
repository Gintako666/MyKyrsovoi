import { Address } from '../types/index.js';
import { COLLECTIONS } from '../enums.js';
import { fetchItems } from '../utils/fetchItems.js';
import { fetchItem } from '../utils/fetchItem.js';
import { logResult } from '../../logResult.js';

// get all addresses
// logResult(await fetchItems<Address>(COLLECTIONS.ADDRESS));

// get single address
// logResult(
//   await fetchItem(COLLECTIONS.ADDRESS, {
//     id: 'cf2749d3-02b3-4123-9662-88e532762339',
//   })
// );

// get addresses with state Alaska

// logResult(
//   await fetchItems<Address>(COLLECTIONS.ADDRESS, {
//     filter: {
//       state: { _eq: 'Alaska' },
//     },
//   })
// );
