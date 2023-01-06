import React from "react";

const Item = ({ element }) => {
  return (
    <div className="each">
      <br />
      <h3>Item: {element.item}</h3>
      <p>Brand: {element.brand}</p>
      <p>Unit: {element.units}</p>
      <p>Quantity: {element.quantity}</p>
      <p>
        Purchased
        {element.isPurchased === true ? (
          <input type="checkbox" checked></input>
        ) : (
          <input type="checkbox"></input>
        )}
      </p>
    </div>
  );
};

export default Item;
