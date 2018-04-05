import * as types from '../actionTypes';





export function GetUser(user) {
    return {type: types.GET_USER_INFO, user: user};
}

export function SetGUID(guid) {
    return {type: types.SET_GUID, guid: guid};
}
export function GetGUID() {
    return {type: types.GET_USER_INFO};
}