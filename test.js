const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

test("De Euros a Dólares", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test("De Dólares a Yenes", () => {
    expect(fromDollarToYen(1)).toBeCloseTo((1 / 1.07) * 156.5);
});

test("De Yenes a Libras", () => {
    expect(fromYenToPound(1)).toBeCloseTo((1 / 156.5) * 0.87);
});
