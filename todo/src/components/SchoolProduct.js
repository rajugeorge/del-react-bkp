import React from "react";

function SchoolProduct(props) {
  return (
    <div>
      <h4>{props.product.name}</h4>
      <p>{props.product.description}</p>
    </div>
  );
}

export default SchoolProduct;
