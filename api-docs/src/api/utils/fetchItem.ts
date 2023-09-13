import { COLLECTIONS } from '../enums.js';
import { fetchItems } from './fetchItems.js';
import { ValueOf } from '../types/index.js';

export const fetchItem = async <T>(
  collection: ValueOf<typeof COLLECTIONS>,
  params: { [key: string]: string | number }
): Promise<T | null> => {
  const LIMIT: number = 1;
  const [key, value] = Object.entries(params)[0];
  let result: T | null = null;

  try {
    const resData = await fetchItems<T>(collection, {
      // @ts-ignore
      filter: {
        [key]: { _eq: value },
      },
      limit: LIMIT,
    });

    if (resData?.length === LIMIT) {
      result = resData[0];
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};
