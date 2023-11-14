import * as actionsTypes from '../Actions/actionsTypes';

const initialState = {
  users: [],
};

export default function(state = initialState, action){
  switch (action.type) {
    case actionsTypes.GET_USER_DETAILS_SUCCESS:
      const sortedUsers = action.payload.sort((a, b) => a.name.first.localeCompare(b.name.first));
      return { ...state, users: sortedUsers, };
    default:
      return state;
  }
};

