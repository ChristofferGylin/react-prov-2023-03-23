import { createReduxModule } from "hooks-for-redux";

const state = {
  message: "",
};

export const [useInputStore, { updateInput }] = createReduxModule(
  "inputStore",
  state,
  {
    updateInput: (state, payload) => {
      return {
        message: payload,
      };
    },
  }
);
