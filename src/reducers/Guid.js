import {GET_USER_INFO, RECEIVE_STUFF, SET_GUID} from '../actionTypes';


export default (state={},action)=>{
    let newState;
    switch(action.type){
        case GET_USER_INFO:
           newState = action.user;
           console.log("reducer");
           return newState;
        case SET_GUID:
           newState = action.guid;
           console.log("reducer");
           return {Guid:newState};
        default :
            return state;

    }
}