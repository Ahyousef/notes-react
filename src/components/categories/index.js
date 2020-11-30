import React from "react";

import { connect } from "react-redux";
import { changeActiveCategory, reset } from "../../store/categories-reducer";
import { Button } from "@material-ui/core";

const categoriesBar = (props) => {
  return (
    <section>
      <ul>
        <h2>Browse our Categories</h2>
        {props.categories.categories.map((category) => {
          return (
            <li
              onClick={() => props.changeActiveCategory(category.name)}
              key={category.name}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
      <Button style={{ border: "black solid 2px" }} onClick={props.reset}>
        Reset Active category
      </Button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories };
};
const mapDispatchToProps = { changeActiveCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(categoriesBar);
