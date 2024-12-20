import { formatCurrency } from "../scripts/utils/money.js";
console.log("test suite: format currency");

console.log(
  "working with numbers that has decimals or in need of rounding off"
);
if (formatCurrency(2000.4) === 20.0) {
  console.log("passed");
} else {
  console.log("failed");
}
