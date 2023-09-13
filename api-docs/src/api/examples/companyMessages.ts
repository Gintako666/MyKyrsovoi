import { addCompanyMessage } from '../utils/addCompanyMessage.js';
import { logResult } from '../../logResult.js';

// add new company message
// logResult(
//   await addCompanyMessage({
//     full_name: 'John Doe',
//     email: 'john-doe@test.com',
//     message: 'I am so satisfied with your service!',
//   })
// );

// success response:
// { errors: [], message: 'Company message added successfully!', code: 201 }

// error response:
// {
//   errors: [
//     {
//       message: 'Validation failed for field "full_name". Value is required.',
//       extensions: {
//         code: 'FAILED_VALIDATION',
//         field: 'full_name',
//         type: 'required'
//       }
//     }
//   ]
// }
