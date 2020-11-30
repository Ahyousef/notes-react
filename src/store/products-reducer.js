const initialState = {
  products: [
    {
      name: "TV",
      category: "Electronics",
      price: 699.0,
      inStock: 5,
      image:
        "https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_960_720.png"
    },
    {
      name: "Radio",
      category: "Electronics",
      price: 99.0,
      inStock: 15,
      image:
        "https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png"
    },
    {
      name: "Shirt",
      category: "Clothing",
      price: 9.0,
      inStock: 25,
      image: "https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png"
    },
    {
      name: "Socks",
      category: "Clothing",
      price: 12.0,
      inStock: 10,
      image:
        "https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png"
    },
    {
      name: "Apples",
      category: "Food",
      price: 0.99,
      inStock: 500,
      image:
        "https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png"
    },
    {
      name: "Eggs",
      category: "Food",
      price: 1.99,
      inStock: 12,
      image:
        "https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png"
    },
    {
      name: "Bread",
      category: "Food",
      price: 2.39,
      inStock: 90,
      image:
        "https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png"
    }
  ],
  activeCategory: null
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let activeCategory = state.activeCategory;
  let products = state.products;
  const { type, payload } = action;

  switch (type) {
    case "CHANGEACTIVE":
      activeCategory = payload;
      products = state.products;
      // const products = state.products.map((product) => {
      //   if (product.category === activeCategory) {
      //     return { name: product.name, price: product.price, active:true };
      //   } else {
      //     return product;
      //   }
      // });
      // console.log("Active Category from Products: ", activeCategory);
      // console.log("Active products: ", products);

      return { activeCategory, products };
    case "ADDPRODUCT":
      products.map((product) => {
        if (product.name === payload.product.name) {
          product.inStock--;
          return product;
        } else {
          return product;
        }
      });
      return { activeCategory, products };
    case "REMOVEPRODUCT":
      console.log(payload);

      products.map((product) => {
        if (product.name === payload.product.product.name) {
          product.inStock++;
          return product;
        } else {
          return product;
        }
      });
      return { activeCategory, products };
    case "RESET":
      console.log(initialState);
      return initialState;
    default:
      return state;
  }
};
export const reduceStock = (name) => {
  return {
    type: "ADDPRODUCT",
    payload: name
  };
};
export const increaseStock = (name) => {
  return {
    type: "REMOVEPRODUCT",
    payload: name
  };
};
export const changeActiveProducts = (name) => {
  return {
    type: "CHANGEACTIVE",
    payload: name
  };
};

export const reset = () => {
  return {
    type: "RESET"
  };
};
