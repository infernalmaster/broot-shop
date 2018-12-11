import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";

import models from "./models";

const immer = immerPlugin();

const store = init({
  models,
  plugins: [immer]
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
