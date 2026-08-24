// Conditions
let Subtotal = 1000;
if (Subtotal >= 2000) {
    let productDiscount = Subtotal * 0.2;
    let productFinalPrice = Subtotal - productDiscount;

    console.log("Eligible for 20% discount");
    console.log(`Discount: ${productDiscount}`);
    console.log(`Final Price: ${productFinalPrice}`);

}else if (Subtotal >= 1500) {
    let productDiscount = Subtotal * 0.1;
    let productFinalPrice = Subtotal - productDiscount;

    console.log("Eligible for 10% discount");
    console.log(`Discount: ${productDiscount}`);
    console.log(`Final Price: ${productFinalPrice}`);

}else if (Subtotal >= 500) {
    let productDiscount = Subtotal * 0.05;
    let productFinalPrice = Subtotal - productDiscount;

    console.log("Eligible for 5% discount");
    console.log(`Discount: ${productDiscount}`);
    console.log(`Final Price: ${productFinalPrice}`);
}else {
    console.log("Not eligible");
}
