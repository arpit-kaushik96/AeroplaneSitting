import { INPUT_UPDATED } from "./actionConstants";

export const updateInput = (input) => {
  return {
    type: INPUT_UPDATED,
    payload: input
  };
};
