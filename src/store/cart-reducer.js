const initialState = {
  cartProducts: []
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  let cartProducts = state.cartProducts;
  switch (type) {
    case "ADDPRODUCT":
      cartProducts.push(payload);
      return { cartProducts };
    case "REMOVEPRODUCT":
      cartProducts = cartProducts.filter((product) => {
        if (!product.product.name === payload.product.name) {
          return product;
        }
      });
      return { cartProducts };
    default:
      return state;
  }
};

export const addProductCart = (name) => {
  return {
    type: "ADDPRODUCT",
    payload: name
  };
};

export const removeCart = (name) => {
  return {
    type: "REMOVEPRODUCT",
    payload: name
  };
};
