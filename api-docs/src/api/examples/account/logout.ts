import { createDirectus, rest, authentication, logout } from '@directus/sdk';
import { Schema } from '../../types/index.js';
import { directus_url, user_email, user_password } from '../../../config.js';
import { logResult } from '../../../logResult.js';

// const client = createDirectus<Schema>(directus_url).with(rest()).with(authentication('json'));

// login first
// @ts-ignore
// const { refresh_token } = (await client.login(user_email, user_password)) as {
//   refresh_token: string;
// };

// then logout
// logResult(await client.request(
//   logout(refresh_token)
// ));

// Output: logout method returns empty body, so no output is expected
