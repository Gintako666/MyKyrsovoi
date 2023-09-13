import { createDirectus, rest, authentication } from '@directus/sdk';
import { Schema } from '../types/index.js';
import { directus_url, user_email, user_password } from '../../config.js';

export default async () => {
  const client = createDirectus<Schema>(directus_url).with(rest()).with(authentication('json'));

  // @ts-ignore
  await client.login(user_email, user_password);

  return client;
};
