import { toggleReviewLike } from '../utils/likeReview.js';
import { logResult } from '../../logResult.js';

// logResult(await toggleReviewLike({
//   review_id: 1,
// }));

// Use this for both like and unlike, it will toggle the state

// SUCCESS RESPONSE: {
//   "review_id": string,
//   "likedByCurrentUser": boolean,
//   "likesAmount": number,
// }

// ERROR REVIEW NOT FOUND RESPONSE: {
//     "errors": [
//       {
//           "message": "Review does not exist",
//           "extensions": {
//               "code": "TOGGLE_REVIEW_LIKE_ERROR"
//           }
//       }
//   ]
// }

// ERROR REVIEW NOT AUTHORIZED: {
//   {
//     "errors": [
//         {
//             "message": "Unauthorized",
//             "extensions": {
//                 "code": "TOGGLE_REVIEW_LIKE_ERROR"
//             }
//         }
//     ]
// }

