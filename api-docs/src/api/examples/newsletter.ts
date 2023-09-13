import { addNewsletter } from '../utils/addNewsletter.js';
import { logResult } from '../../logResult.js';

// add new newsletter
// logResult(
//   await addNewsletter({
//     email: 'test4@test',
//   })
// );

// success response:
// { errors: [], message: 'Newsletter added successfully!', code: 201 }

// error response:
// {
//   errors: [
//     {
//       message: 'Value for field "email" in collection "newsletters" has to be unique.',
//       extensions: {
//         code: 'RECORD_NOT_UNIQUE',
//         collection: 'newsletters',
//         field: 'email'
//       }
//     }
//   ]
// }
