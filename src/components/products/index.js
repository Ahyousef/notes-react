import React from "react";

import { connect } from "react-redux";
import { changeActiveProducts, reset } from "../../store/products-reducer";

const productsList = (props) => {
  console.log("active category:", props.products.activeCategory);
  return (
    <section>
      <ul>
        {props.products.products.map((product) => {
          console.log(product.category);

          if (product.category === props.products.activeCategory) {
            console.log("true");

            return (
              <li key={product.name}>
                {product.name}
                <br />
                {product.category}
                <br />
                <img src={product.image} alt="Porduct" width="200px" />
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};
const mapDispatchToProps = { changeActiveProducts, reset };

export default connect(mapStateToProps, mapDispatchToProps)(productsList);
