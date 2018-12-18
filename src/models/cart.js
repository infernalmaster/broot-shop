// все ж краще, щоб стан корзини мав такий вигляд
// {
//   items: [
//     {
//       product: {
//         description: 'The Apple iPhone SE has the footprint and design traits ot the iPhone 5s - from the 4-inch display to the stylish, metal-made body. On the inside, however, is packed the powerful A9 processor of the iPhone 6s, along with Apple\'s latest and best 12MP camera. In other words, this could very well be the best small smartphone in existence. In charge of it all is the latest iOS 9.3 operating system, with support for Apple Pay, AppleID, Night Shift and Apple Health. You may have one in silver, grey, gold, or rose gold for just $399.',
//         price: 399,
//         image: 'http://shop.ivk-service.com/535613-thickbox/apple-iphone-se-32gb-space-grey-mp822rka.jpg',
//         name: 'iPhone SE',
//         categoryId: '5c0b84708b3a460063cdbb1e',
//         userName: 'diana',
//         id: '5c0b862d8b3a460063cdbb2c'
//       },
//       quantity: 3
//     },
//     {
//       product: {
//         description: 'Nokia 5310 XpressMusic has 30 MB of built-in memory. The main screen size is 2.1 inches, 31.5 x 41.5 mm with 240 x 320 pixels resolution. It has a 190 ppi pixel density. The screen covers about 29.4% of the device\'s body. This is an average result.',
//         price: 130,
//         image: 'http://nokia-ms.ru/wp-content/uploads/2016/02/nokia5310-250x510.png',
//         name: 'Nokia 5310 XpressMusic',
//         categoryId: '5c0b84708b3a460063cdbb1e',
//         userName: 'diana',
//         id: '5c0b86448b3a460063cdbb2e'
//       },
//       quantity: 1
//     }
//   ]
// }
export default {
  state: {
    items: []
  },
  reducers: {
    addProduct(state, product) {
      const item = state.items.find(item => item.product.id === product.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          product: product,
          quantity: 1
        });
      }
    },
    removeProduct(state, productId) {
      state.items = state.items.filter(item => item.product.id !== productId);
    },
    setQuantity(state, productId, quantity) {
      if (quantity === 0) {
        state.items = state.items.filter(item => item.product.id !== productId);
      } else {
        const item = state.items.find(item => item.product.id === productId);
        item.quantity = quantity;
      }
    }
  }
};

export function loadStateFromLocalStorage() {
  return JSON.parse(localStorage.getItem("cart") || '{"items": []}');
}

export function saveStateToLocalStorage(store) {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
}
