import { createReduxModule } from "hooks-for-redux";

const state = {
  todos: [],
};

export const [useInputStore, { updateTodos }] = createReduxModule(
  "inputStore",
  state,
  {
    updateTodos: (state, payload) => {
      return {
        todos: payload,
      };
    },
  }
);
