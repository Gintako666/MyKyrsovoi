import { register } from '../../utils/register.js';
import { logResult } from '../../../logResult.js';

const params = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'test-john.doe1@test.com',
  password: 'some_password'
};

// logResult(await register(params));

// Result:

// Success output:

// {
//   statusCode: 201,
//   message: "Customer was registered successfully!"
// }

// Error output example:

// {
//   "errors": [
//     {
//         "message": "Value for field \"email\" in collection \"directus_users\" has to be unique.",
//         "extensions": {
//             "code": "RECORD_NOT_UNIQUE",
//             "collection": "directus_users",
//             "field": "email"
//         }
//     }
//   ]
// }



