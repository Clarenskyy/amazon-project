import { formatCurrency } from "../../scripts/utils/money.js";
describe("test suite: format currency", () => {
  it("convert cents into dollar", () => {
    expect(formatCurrency(2095)).toEqual(20.95);
  });
  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual(0.0);
  });
  it("working with a number that needs rounding off", () => {
    expect(formatCurrency(2000.5)).toEqual(20.01);
  });
});
