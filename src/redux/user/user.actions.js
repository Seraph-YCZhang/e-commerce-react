import { UserACtionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserACtionTypes.SET_CURRENT_USER,
    payload: user
});