import React from "react";

import { connect } from "react-redux";

const activeCategory = (props) => {
  return (
    <section>
      {props.categories.categories.map((category) => {
        if (category.name === props.categories.activeCategory) {
          return (
            <>
              <h2 key={category.name}> {category.name}</h2>
              <p>{category.description}</p>
            </>
          );
        }
      })}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories };
};
export default connect(mapStateToProps)(activeCategory);
