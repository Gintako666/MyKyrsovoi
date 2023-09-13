import { createDirectus, rest, authentication } from '@directus/sdk';
import { Schema } from '../../types/index.js';
import { directus_url, user_email, user_password } from '../../../config.js';
import { logResult } from '../../../logResult.js';

const client = createDirectus<Schema>(directus_url).with(rest()).with(authentication('json'));

// @ts-ignore
// logResult(await client.login(user_email, user_password));

// Success output:

// {
//   access_token: string,
//   expires: number,
//   refresh_token: string,
//   expires_at: number
// }

// Error output:

// {
//   errors: [
//     {
//       message: 'Invalid user credentials.',
//       extensions: { code: 'INVALID_CREDENTIALS' }
//     }
//   ]
// }
