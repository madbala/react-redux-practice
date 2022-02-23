import { HANDLECHANGE, HANDLERESET, HANDLESUBMIT } from "./actions";

const defaultState = {
  input: "",
  message: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case HANDLECHANGE: {
      return {
        ...state,
        input: action.val
      };
    }
    case HANDLESUBMIT: {
      return {
        ...state,
        input: "",
        message: state.message.concat(action.message)
      };
    }
    case HANDLERESET: {
      return {
        input: "",
        message: []
      };
    }
    default: {
      return state;
    }
  }
};
