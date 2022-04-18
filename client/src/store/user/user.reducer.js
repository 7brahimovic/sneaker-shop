import USER_ACTION_TYPES from "./user.types";

export const userReducer = (state = USER_INITIAL_STATE, action={}) => {
    const { type, payload } = action;
    console.log(type)
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}

export const USER_INITIAL_STATE = {
    currentUser: null
}