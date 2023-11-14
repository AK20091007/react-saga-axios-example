import * as actionsTypes from './actionsTypes';

const getUserDetails = (nationality, results) =>{
    return {
        type:actionsTypes.GET_USER_DETAILS,
        payload: { nationality, results },
    }
}

export default getUserDetails;