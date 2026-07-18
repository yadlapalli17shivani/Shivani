function calculateFinalAmount(cost, discount) {
    return cost - (cost * discount);
}
// Arrow Function
const calculateDiscount = (cost, discount) => {
    return cost - (cost * discount);
};
//  Shorthand Arrow Function
const getStoreMessage = (store) => `Welcome to ${store} Shopping Mall!`;
// --- Testing the Program ---
const productCost = 1500; // Product Price
const discountRate = 0.20; // 20% Discount
console.log(getStoreMessage("Trends"));
// Using the traditional method
const finalAmount1 = calculateFinalAmount(productCost, discountRate);
console.log(`Final Amount (Traditional): ₹${finalAmount1}`);
// Using the arrow function method
const finalAmount2 = calculateDiscount(productCost, discountRate);
console.log(`Final Amount (Arrow): ₹${finalAmount2}`);
export {};
/* INLINE COMPARISON:

Traditional:
function square(num: number): number {
    return num * num;
}

Arrow:
const square = (num: number): number => num * num;

*/ 
