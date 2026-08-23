# Day 03 - JavaScript Basics & Programming Logic

## 🎯 Day 03 Objective

Today I started learning **JavaScript** by connecting it with the HTML and CSS concepts practiced in the previous days.

Instead of starting with only theoretical concepts, I used small practical examples to understand how JavaScript adds **logic, behavior, and decision-making** to a webpage.

### The basic relationship I learned:

```text
HTML       → Structure
CSS        → Design & Styling
JavaScript → Logic, Behavior & Interaction
```

The main goal was to start developing programming logic and become comfortable with writing, running, and debugging JavaScript code.

---

# 🚀 What I Practiced Today -

Today's practice included:

* Connecting JavaScript with HTML
* Creating a JavaScript file
* Running JavaScript in the browser
* Using `console.log()`
* Variables
* `let`
* Strings
* Numbers
* Template literals
* `${}`
* Arithmetic operators
* Comparison operators
* `if`
* `else`
* Conditional logic
* Percentage calculation
* Discount calculation
* Debugging
* Understanding variable redeclaration errors
* Organizing JavaScript practice into separate files

---

# 1. 🔗 Connecting JavaScript With HTML

I learned that JavaScript can be connected to an HTML page using the `<script>` tag.

Example:

```html
<script src="script.js"></script>
```

I placed the script before the closing `</body>` tag.

This allows the browser to load the JavaScript file along with the HTML page.

### Basic flow

```text
HTML File
    ↓
Browser loads page
    ↓
JavaScript file is connected
    ↓
JavaScript code executes
    ↓
Output can be checked in Console
```

---

# 2. 🧪 First JavaScript Experiment

My first JavaScript test was:

```javascript
console.log("Hello Manvi!");
```

I checked the output through:

```text
Browser
   ↓
F12
   ↓
Console
```

Expected output:

```text
Hello Manvi!
```

### What I learned

`console.log()` is useful for:

* Checking values
* Understanding program output
* Debugging
* Testing whether JavaScript code is running

---

# 3. 📦 Variables

I started practicing variables using `let`.

Example:

```javascript
let productName = "Wireless Headphones";
let price = 15;
```

Here:

```text
productName → "Wireless Headphones"
price       → 15
```

A variable gives a name to a value so that the value can be used later in the program.

---

# 4. `let`

I practiced declaring variables using:

```javascript
let productName = "Wireless Headphones";
```

I also learned that a variable declared using `let` can be reassigned:

```javascript
let productName = "Wireless Headphones";

productName = "Keyboard";
```

However, the same variable cannot be declared again using `let` in the same scope.

For example:

```javascript
let productName = "Wireless Headphones";
let productName = "Keyboard";
```

This causes a redeclaration error.

---

# 5. 🔤 Strings

A string is used to represent text.

Example:

```javascript
let productName = "Wireless Headphones";
```

The value:

```text
"Wireless Headphones"
```

is a string.

---

# 6. 🔢 Numbers

Numbers can be stored without quotation marks.

Example:

```javascript
let price = 15;
```

Here:

```text
15
```

is a number.

This distinction becomes important when performing calculations.

---

# 7. 🧩 Template Literals

I practiced combining variables with text.

Example:

```javascript
let productName = "Wireless Headphones";
let price = 15;

console.log(`${productName} costs $${price}`);
```

Output:

```text
Wireless Headphones costs $15
```

I learned that template literals use backticks:

```text
`
```

and variables can be inserted using:

```javascript
${variable}
```

### Concept

Instead of manually joining multiple strings, template literals provide a cleaner way to create dynamic text.

---

# 8. ➕ Arithmetic Operations

I started using JavaScript for calculations.

For example:

```javascript
let subtotal = 1998;

let discount = subtotal * 0.1;

let finalPrice = subtotal - discount;
```

This introduced basic arithmetic operators:

```text
+  → Addition
-  → Subtraction
*  → Multiplication
/  → Division
```

---

# 9. 🔍 Comparison Operators

I practiced using a comparison operator in a condition.

Example:

```javascript
subtotal >= 1500
```

Here:

```text
>=
```

means:

**greater than or equal to**

The result of a comparison is either:

```text
true
```

or:

```text
false
```

This allows JavaScript to make decisions.

---

# 10. 🔀 if / else

I practiced conditional logic using `if` and `else`.

Basic structure:

```javascript
if (condition) {
    // code when condition is true
} else {
    // code when condition is false
}
```

The logic I practiced was:

```text
If subtotal >= ₹1500
        ↓
Give 10% discount

Otherwise
        ↓
No discount
```

---

# 11. 🛒 Practical Discount Problem

I created a simple product/order discount calculation.

The requirement was:

> If the subtotal is ₹1500 or more, apply a 10% discount.

For example:

```text
Subtotal = ₹1998
```

Since:

```text
₹1998 >= ₹1500
```

the customer qualifies for the discount.

---

# 12. 💰 Percentage Calculation

This was one of the most important concepts I learned today.

Initially, I misunderstood:

```javascript
let productDiscount = 0.1;
```

I treated `0.1` as if it were the actual discount amount.

But:

```text
0.1 = 10% rate
```

It is **not** the actual discount amount.

To calculate the actual discount:

```javascript
let productDiscount = Subtotal * 0.1;
```

For:

```text
Subtotal = ₹1998
```

the calculation becomes:

```text
1998 × 0.1
= 199.8
```

So:

```text
Discount = ₹199.8
```

Then:

```text
Final Price
= Subtotal - Discount

= 1998 - 199.8

= ₹1798.2
```

### Key Learning

```text
Percentage Rate
      ↓
Multiply by Subtotal
      ↓
Actual Discount Amount
      ↓
Subtract from Subtotal
      ↓
Final Price
```

---

# 13. ✅ Final Discount Logic

The corrected logic was:

```javascript
let Subtotal = 1998;

if (Subtotal >= 1500) {
    let productDiscount = Subtotal * 0.1;
    let productFinalPrice = Subtotal - productDiscount;

    console.log("Eligible for 10% discount");
    console.log(`Subtotal: ₹${Subtotal}`);
    console.log(`Discount: ₹${productDiscount}`);
    console.log(`Final Price: ₹${productFinalPrice}`);
} else {
    console.log("Not eligible for discount");
}
```

Expected output:

```text
Eligible for 10% discount
Subtotal: ₹1998
Discount: ₹199.8
Final Price: ₹1798.2
```

---

# 14. 🐛 Mistake - Wrong Discount Calculation

### Initial approach

I used:

```javascript
let productDiscount = 0.1;
```

and then tried to subtract it directly from the subtotal.

That would effectively calculate:

```text
1998 - 0.1
```

which is:

```text
1997.9
```

This is incorrect because `0.1` represents the **10% rate**, not ₹0.1 as the discount amount.

### Improvement

I changed it to:

```javascript
let productDiscount = Subtotal * 0.1;
```

This calculates the actual discount amount.

### Lesson

I learned the difference between:

```text
Discount Rate  → 0.1
Discount Amount → Subtotal × 0.1
```

---

# 15. 🐛 Mistake - Variable Name Mismatch

During the discount practice, I also had a variable naming issue.

For example, one variable was declared with one name, but another name was used later.

Example:

```javascript
let productDiscountPrice = 0.1;

let productFinalPrice = Subtotal - discount;
```

The problem was that:

```text
productDiscountPrice
```

and:

```text
discount
```

are two different variable names.

JavaScript does not automatically assume they are the same.

### Improvement

I learned to keep variable names consistent throughout the calculation.

---

# 16. 🐛 Redeclaration Error

While practicing multiple JavaScript tasks, I initially tried keeping everything in the same JavaScript file.

This caused an error when I declared the same variable name multiple times using `let`.

Example:

```javascript
let productName = "Wireless Headphones";

let productName = "Keyboard";
```

This results in a redeclaration error because the same `let` variable cannot be declared twice in the same scope.

---

# 17. 🛠️ How I Improved the File Structure

Instead of putting every independent exercise into one large JavaScript file, I separated the practice into different files.

```text
Day-03/
│
├── 01-basics.js
├── 02-variables.js
└── 03-discount.js
```

### Why this is better

* Keeps exercises organized
* Prevents unnecessary variable conflicts
* Makes debugging easier
* Makes each concept easier to review
* Allows me to revisit individual exercises later

This was an important practical lesson about **organizing JavaScript code**.

---

# 18. 🧠 Programming Thought Process

Today's practice helped me understand how to convert a requirement into programming logic.

For example:

### Requirement

> Give a 10% discount if the subtotal is at least ₹1500.

### My thought process

```text
Requirement
    ↓
Need to store subtotal
    ↓
Create variable
    ↓
Need to check a condition
    ↓
Use if
    ↓
Compare subtotal with 1500
    ↓
Use >=
    ↓
Calculate 10%
    ↓
Subtotal × 0.1
    ↓
Subtract discount
    ↓
Calculate final price
    ↓
Print result
```

This is helping me move from:

**"What syntax do I remember?"**

towards:

**"What does the problem require, and how can I break it into steps?"**

---

# 19. 🔎 Debugging Practice

Today's mistakes also gave me practical debugging experience.

When something did not work, I checked:

* Variable names
* Whether the variable was declared
* Whether the calculation was correct
* Whether the condition was correct
* Whether the JavaScript file was connected
* Console output
* Browser error messages

This helped me understand that debugging is not just about finding syntax errors.

Sometimes the code runs but the **logic itself is wrong**.

---

# 20. 📚 Concepts Covered Today

| Concept             | What I Practiced              |
| ------------------- | ----------------------------- |
| JavaScript          | Basic introduction            |
| HTML + JS           | Connecting JS file            |
| `console.log()`     | Checking output               |
| Variables           | Storing values                |
| `let`               | Variable declaration          |
| Strings             | Text values                   |
| Numbers             | Numeric values                |
| Template literals   | Dynamic text                  |
| `${}`               | Inserting variables           |
| Arithmetic          | Calculations                  |
| `*`                 | Multiplication                |
| `-`                 | Subtraction                   |
| `>=`                | Comparison                    |
| `if`                | Conditional logic             |
| `else`              | Alternative condition         |
| Percentage          | Discount calculation          |
| Debugging           | Finding mistakes              |
| Scope/redeclaration | Understanding `let` conflicts |
| File organization   | Separating exercises          |

---

# 💡 Important Takeaways

### 1. JavaScript adds behavior and logic

```text
HTML → Structure
CSS → Appearance
JS → Behavior + Logic
```

### 2. Variables store information

```javascript
let price = 15;
```

### 3. Conditions allow decisions

```javascript
if (price >= 100) {
    // ...
}
```

### 4. Percentages require calculation

```javascript
discount = subtotal * 0.1;
```

### 5. Variable names matter

The variable name used while declaring a value must match the variable being used later.

### 6. `let` cannot be redeclared in the same scope

This helped me understand why keeping multiple unrelated exercises in one file can create conflicts.

### 7. Debugging is part of programming

Errors and incorrect outputs are opportunities to understand what the code is actually doing.

---

# 📂 Day 03 Structure

```text
Day-03/
│
├── README.md
│
├── 01-basics.js
├── 02-variables.js
├── 03-discount.js
│
└── console-output.png
```

---

# 📈 Progress

| Area              | Status       |
| ----------------- | ------------ |
| JavaScript Basics | 🟡 Learning  |
| Variables         | 🟢 Practiced |
| `let`             | 🟢 Practiced |
| Strings & Numbers | 🟢 Practiced |
| Console           | 🟢 Practiced |
| Template Literals | 🟢 Practiced |
| Operators         | 🟢 Practiced |
| Conditions        | 🟢 Practiced |
| Basic Logic       | 🟡 Improving |
| Debugging         | 🟡 Improving |
| Coding Fluency    | 🟡 Improving |

---

# 🏆 Day 03 Outcome

Today I moved from HTML and CSS into JavaScript and started understanding how programming logic works.

I practiced:

```text
Store Data
    ↓
Use Variables
    ↓
Print Data
    ↓
Combine Data
    ↓
Compare Values
    ↓
Make Decisions
    ↓
Perform Calculations
    ↓
Debug Errors
    ↓
Improve the Logic
```

The biggest learning from today was not just learning JavaScript syntax. It was learning how to **break a small real-world requirement into programming steps** and then debug the logic when the result was not correct.

---

## 🔄 Next Learning Focus

Continue JavaScript fundamentals with:

* Data types in more detail
* More operators
* Conditions
* Functions
* Arrays
* Objects
* Practical logic problems

After building enough JavaScript fundamentals, the next stage will be **DOM manipulation and events**, where JavaScript will start interacting directly with the HTML/CSS UI.

---

### 📝 Reflection

Today I learned that making mistakes while coding is normal. The important part is understanding **why the mistake happened, fixing it, and remembering the concept behind the correction**.

I am focusing on improving coding fluency through practical problems rather than only memorizing syntax.

