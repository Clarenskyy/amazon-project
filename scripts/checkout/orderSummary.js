import { products } from "../../data/products.js";
import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryOptions.js";
hello();

const today = dayjs();
const deliveryDate = today.add(7, "days");
deliveryDate.format("dddd, MMMM D");

export function renderOrderSummary() {
  let orderSummaryHTML;

  cart.forEach((cartItem) => {
    const index = products.findIndex((item) => item.id === cartItem.productId);

    const deliveryOptionsId = cartItem.deliveryOptionsId;

    const deliveryOption = getDeliveryOption(deliveryOptionsId);

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    orderSummaryHTML += `
                <div class="cart-item-container js-cart-item-container-${
                  cartItem.productId
                }">
              <div class="delivery-date">
                Delivery date: ${dateString}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${products[index].image}">

                <div class="cart-item-details">
                  <div class="product-name">
                  ${products[index].name}
                  </div>
                  <div class="product-price">
                    $${formatCurrency(products[index].priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${
                        cartItem.quantity
                      }</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${
                      products[index].id
                    }">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionsHTML(cartItem)}
                </div>
              </div>
            </div>
      `;
  });

  document.querySelector(".js-order-summary").innerHTML = orderSummaryHTML;

  document.querySelectorAll(".js-delete-quantity-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
    });
  });

  function deliveryOptionsHTML(cartItem) {
    let html = "";

    deliveryOptions.forEach((deliveryOptions) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOptions.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");

      const priceString =
        deliveryOptions.priceCents === 0
          ? "FREE"
          : `${formatCurrency(deliveryOptions.priceCents)} -`;

      const isChecked = deliveryOptions.id === cartItem.deliveryOptionsId;
      html += `<div class="delivery-option">
                    <input type="radio"
                    ${isChecked ? "checked" : ""}
                    class="js-delivery-option";
                    data-product-id="${cartItem.productId}" 
                    data-delivery-options-id="${deliveryOptions.id}"
                      class="delivery-option-input"
                      name="delivery-option-${cartItem.productId}">
                    <div>
                      <div class="delivery-option-date">
                        ${dateString}
                      </div>
                      <div class="delivery-option-price">
                        ${priceString} Shipping
                      </div>
                    </div>
                  </div>
  `;
    });

    return html;
  }

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionsId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionsId);
      renderOrderSummary();
    });
  });
}
