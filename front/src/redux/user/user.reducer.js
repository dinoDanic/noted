import userActionsType from "./user.actionsType";

const INITIAL_STATE = null;
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsType.NEW_USER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
