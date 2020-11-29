const initialState = {
  categories: [
    {
      name: "Electronics",
      displayName: "Elecronics",
      description: "Technology and whatnot"
    },
    { name: "Food", displayName: "Food", description: "Eat and get nutrient" },
    {
      name: "Clothing",
      displayName: "Clothing",
      description: "Wear clothes or get arrested"
    }
  ],
  activeCategory: null
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGEACTIVE":
      // const categories = state.categories.map((category) => {
      //   if (category.name === payload) {
      //     return { name: category.name, displayName:category.displayName,description:category.description};
      //   } else {
      //     return category;
      //   }
      // });
      const categories = state.categories;
      const activeCategory = payload;
      // console.log("Active Category: ",activeCategory);

      return { activeCategory, categories };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const changeActiveCategory = (name) => {
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
