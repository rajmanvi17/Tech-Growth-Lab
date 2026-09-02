//Logical Operators
let jobAge = 22;
let hasDegree = true;

if (jobAge >= 18 && hasDegree === true) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

//OR Operator
let hasCertificate = false;
let hasExperience = true;

if (hasCertificate || hasExperience) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

//NOT Operator
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please login");
}  
