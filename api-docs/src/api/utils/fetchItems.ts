import { Query, readItems } from '@directus/sdk';

import { COLLECTIONS } from '../enums.js';
import { fieldsSettings } from '../fieldsSettings.js';
import { Schema, ValueOf } from '../types/index.js';
import authenticateCustomer from './authenticateCustomer.js';

const client = await authenticateCustomer();

export const fetchItems = async <T>(
  collection: ValueOf<typeof COLLECTIONS>,
  query?: Query<Schema, T>
): Promise<T[] | null> => {
  let result: T[] | null = null;

  try {
    const resData = (await client.request(
      // @ts-ignore
      readItems(collection, {
        ...query,
        fields: fieldsSettings[collection],
      })
    )) as T[];

    return resData;
  } catch (error) {
    console.error(error);
  }

  return result;
};
