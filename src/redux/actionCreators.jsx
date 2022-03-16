import { HANDLECHANGE, HANDLESUBMIT, HANDLERESET } from "./types";

export const handleChangeNew = (val) => {
  return {
    type: HANDLECHANGE,
    val
  };
};

export const handleSubmitNew = (message) => {
  return {
    type: HANDLESUBMIT,
    message
  };
};

export const handleResetNew = () => {
  return {
    type: HANDLERESET
  };
};
