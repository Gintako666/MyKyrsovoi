import { readUsers, updateUser } from '@directus/sdk';
import { DirectusUser, DirectusUserUpdatesParams } from '../../types/index.js';
import { user_email } from '../../../config.js';
import { logResult } from '../../../logResult.js';
import authenticateCustomer from '../../utils/authenticateCustomer.js';

// const client = await authenticateCustomer();

// const [currentUser] = (await client.request(
//   readUsers({
//     filter: {
//       email: {
//         _eq: user_email,
//       },
//     },
//   })
// )) as DirectusUser[];

// logResult(
//   await client.request(
//     updateUser(currentUser.id, {
//       first_name: 'Default-updated',
//     } as DirectusUserUpdatesParams)
//   )
// );

// Success output - Updated User object
// {
//   nationality: null,
//   job_title: null,
//   first_name: 'John',
//   last_name: 'User',
//   email: 'test-regular@email.com',
//   id: 'fb91ae8e-8659-48ea-ad40-6f216d9bfa78',
//   last_page: null,
//   password: '**********',
//   location: null,
//   title: null,
//   description: null,
//   tags: null,
//   avatar: null,
//   language: null,
//   theme: 'auto',
//   tfa_secret: null,
//   status: 'active',
//   role: 'e48b0885-e3a9-4419-a3cd-efff520c1c62'
// }

// Error output:

// {
//   errors: [
//     {
//       message: "You don't have permission to access this.",
//       extensions: { code: 'FORBIDDEN' }
//     }
//   ]
// }
