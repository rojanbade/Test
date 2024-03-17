import { DECREMENTED_AGE, INCREMENTED_AGE } from "../action";

export function counterReducer(state, action) {
    if (action.type === INCREMENTED_AGE) {
        return {
            age: state.age + 1
        };
    }
    throw Error('Unknown action.');
}


// export function counterReducer(state, action) {

//     switch (action) {
//         case INCREMENTED_AGE:
//             return {
//                 age: state.age + 1
//             };

//         case DECREMENTED_AGE:
//             return {
//                 age: state.age - 1
//             }

//         default:
//             return 'action is not valid'
//     }

// }