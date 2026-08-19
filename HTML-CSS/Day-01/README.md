# Day 01 — Product Card UI

## 🎯 What I Built

Created a responsive **Wireless Headphones Product Card** using HTML and CSS.

The main focus was on practicing CSS layout, spacing, styling, borders, shadows, and hover effects through hands-on implementation.

---

## 🛠️ Technologies Used

* HTML5
* CSS3

---

## ✨ Features

* Product image
* Product title
* Product description
* Price badge
* Buy Now button
* Card hover animation
* Product image hover animation
* Price hover animation
* Button hover effect
* Rounded corners
* Box shadows
* Centered layout

---

## 📚 CSS Concepts Practiced

### Box Sizing

```css
* {
    box-sizing: border-box;
}
```

Used `border-box` to make width and padding calculations easier.

### Flexbox

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Used Flexbox to center the product card horizontally and vertically.

### Width & Max Width

```css
.card {
    max-width: 350px;
    width: 100%;
}
```

Used `max-width` along with `width: 100%` to keep the card responsive.

### Spacing

Practiced:

* `padding`
* `margin`

Example:

```css
.card {
    padding: 24px;
    margin: 0 auto;
}
```

### Border Radius

```css
.card {
    border-radius: 62px;
}
```

Used rounded corners to style the product card.

### Box Shadow

```css
.card {
    box-shadow: grey 0px 0px 20px 0px;
}
```

Used shadows to create depth around the card and product image.

### Object Fit

```css
.card img {
    object-fit: cover;
}
```

Used `object-fit` to control how the product image fits inside its container.

---

## 🎨 Price Styling

The price was styled as a separate badge:

```css
.card h3 {
    border: #555 3px solid;
    background: #64c180;
    border-radius: 8px;
    width: fit-content;
    padding: 5px 10px;
}
```

### What I Practiced

* Border thickness
* Background color
* Border radius
* `width: fit-content`
* Padding
* Centering with `margin: auto`

---

## 🔘 Button Styling

```css
.card button {
    width: 50%;
    padding: 10px;
    display: block;
    margin: 0 auto;

    border: none;
    border-radius: 8px;
    background-color: yellow;
}
```

### Practical Learning

I practiced how to:

* Control button width
* Center the button
* Remove the default border
* Add rounded corners
* Add background color
* Add padding

---

## 🖱️ Hover Effects

### Card

```css
.card:hover {
    transform: translateY(-10px);
}
```

### Product Image

```css
.card img:hover {
    transform: translateY(-5px);
}
```

### Price

```css
.card h3:hover {
    transform: translateY(-5px);
}
```

### Button

```css
.card button:hover {
    transform: translateY(-2px);
    background-color: cornflowerblue;
}
```

These effects helped me understand how `:hover`, `transform`, and `transition` work together to create interactive UI behavior.

---

## 💡 Practical Problems I Solved

During this practice, I worked on questions such as:

* How to center the card?
* How to center the button?
* How to control border thickness?
* How to change the color of `h3` and `p`?
* How to create rounded corners?
* How to add shadows?
* How to create hover animations?
* How to make the card width responsive?

---

## 📂 Files

```text
Day-01/
│
├── README.md
├── index.html
├── style2.css
├── product.png
└── final-card.png
```

---

## 📈 Learning Progress

**HTML & CSS:** 🟢 Practicing

**Focus:** Building UI through hands-on coding and understanding CSS by solving practical styling problems.

---

## 🔄 Next Step

Continue practicing HTML & CSS by building small UI components and improving layout, styling, and responsive design skills.
