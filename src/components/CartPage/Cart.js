import React from "react";

import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = ({ history }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Your Cart Items" center />
      </div>
      <CartColumns />
      <CartList />
      <CartTotals history={history} />
    </section>
  );
};

export default Cart;
