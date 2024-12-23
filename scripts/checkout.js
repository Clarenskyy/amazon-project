import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import "../data/cart-oop.js"; //if needed just remove the //
//import "../data/cart-class.js";
//import "../data/backend-practice.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
  loadProductsFetch(),

  /*  new Promise((resolve) => {
    console.log("start promise");
    loadProductsFetch(() => {
      console.log("finish loading");
      resolve();
    });
  }), */

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

/* new Promise((resolve) => {
  console.log("start promise");
  loadProducts(() => {
    console.log("finish loading");
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  }); */

/* loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
}); */
