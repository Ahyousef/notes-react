import React from "react";

import { connect } from "react-redux";
import { addProductCart, removeCart } from "../../store/cart-reducer";
import { increaseStock } from "../../store/products-reducer";
import { Button } from "@material-ui/core";

const cartList = (props) => {
  console.log(props);

  return (
    <section>
      <ul>
        <h2>Cart ({props.cart.cartProducts.length})</h2>
        {props.cart.cartProducts.map((product) => {
          return (
            <li key={product.product.name}>
              {product.product.name}
              <button
                style={{ margin: "5px" }}
                onClick={() => {
                  props.increaseStock({ product });
                  props.removeCart({ product });
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
const mapDispatchToProps = { addProductCart, removeCart, increaseStock };

export default connect(mapStateToProps, mapDispatchToProps)(cartList);
