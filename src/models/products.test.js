import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";

import products, { createModel } from "./products";

describe("Model products", () => {
  describe("reducer setList", () => {
    it("sets list property from payload", () => {
      const store = init({
        models: {
          products
        },
        plugins: [immerPlugin()]
      });

      const productsList = [{ name: "x" }];

      store.dispatch.products.setList(productsList);

      expect(store.getState().products.list).toBe(productsList);
    });
  });

  describe("effect loadAll", () => {
    it("loads data and calls setList", async () => {
      const productsList = [{ name: "x" }];
      const loadProducts = () => Promise.resolve(productsList);

      const setListMock = jest.fn();

      const model = createModel(loadProducts);

      await model.effects(/* dispatch */).loadAll.call({
        setList: setListMock
      });

      expect(setListMock).toBeCalled();
      expect(setListMock).toBeCalledWith(productsList);
    });
  });
});
