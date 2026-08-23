let Subtotal = 1998;

if (Subtotal >= 1500) {
  let productDiscount = Subtotal * 0.1;
  let productFinalPrice = Subtotal - productDiscount;

  console.log("Eligible for 10% discount");
  console.log(`Subtotal: ${Subtotal}`);
  console.log(`Discount: ${productDiscount}`);
  console.log(`Final Price: ${productFinalPrice}`);
} else {
  console.log("Not eligible for discount");
}
