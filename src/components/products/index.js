import React from "react";

import { connect } from "react-redux";
import {
  changeActiveProducts,
  reset,
  reduceStock
} from "../../store/products-reducer";
// import { addProductCart } from "../../store/cart-reducer";

const productsList = (props) => {
  return (
    <section>
      <ul>
        {props.products.products.map((product) => {
          if (
            product.category === props.products.activeCategory &&
            product.inStock > 1
          ) {
            return (
              <li key={product.name}>
                Name: {product.name}
                <br />
                Category: {product.category}
                <br />
                InStock: {product.inStock}
                <br />
                <button onClick={() => props.reduceStock({ product })}>
                  Add to Cart
                </button>
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
const mapDispatchToProps = { changeActiveProducts, reset, reduceStock };

export default connect(mapStateToProps, mapDispatchToProps)(productsList);
