import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";

import models from "./models";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./models/cart";

const immer = immerPlugin();
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = init({
  models,
  plugins: [immer],
  redux: {
    initialState: {
      cart: loadStateFromLocalStorage()
    },
    middlewares: [logger]
  }
});

store.subscribe(() => {
  saveStateToLocalStorage(store);
});

window.store = store;

// Hot reloading
if (module.hot) {
  // Reload rematch models
  module.hot.accept("./models", () => {
    Object.keys(models).forEach(modelKey => {
      console.log(`Reloading model ${modelKey}`);
      store.model({
        name: modelKey,
        ...models[modelKey]
      });
    });
  });
}

export default store;
