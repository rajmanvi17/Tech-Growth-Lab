# Day 02 - Responsive Product Cards

## 🎯 Today's Goal

Today I continued practicing HTML and CSS by taking the single product card created on Day 01 and expanding it into a **3-card responsive product layout**.

The main goal was to improve my understanding of:

* Flexbox
* Multiple-card layouts
* Spacing and alignment
* Flexible card sizing
* Hover effects
* CSS transitions
* Responsive design
* Media queries
* Practical CSS problem-solving

Instead of only following a fixed design, I practiced thinking about **which CSS property is needed to achieve a particular UI requirement**.

---

# 🚀 What I Built

I converted the single product card from Day 01 into a layout containing three product cards:

### 🎧 Wireless Headphones

* Description: High quality wireless headphones with great sound
* Price: `$15`

### ⌨️ Keyboard

* Description: High quality wireless keyboard with fast working
* Price: `$17`

### 🖱️ Mouse

* Description: High quality wireless mouse with fast working
* Price: `$10`

Each card contains:

* Product image
* Product title
* Product description
* Price
* Buy Now button
* Hover effects

---

# 🧱 HTML Structure

I created a parent container:

```html
<div class="card-container">
```

Inside it, I created three reusable product cards:

```html
<div class="card">
    ...
</div>
```

The basic structure is:

```text
card-container
│
├── card
│   ├── image
│   ├── heading
│   ├── description
│   ├── price
│   └── button
│
├── card
│   ├── image
│   ├── heading
│   ├── description
│   ├── price
│   └── button
│
└── card
    ├── image
    ├── heading
    ├── description
    ├── price
    └── button
```

This helped me understand how a common parent container can control the layout of multiple child elements.

---

# 📐 Flexbox

One of the main concepts practiced today was **Flexbox**.

I used:

```css
.card-container {
    display: flex;
}
```

This made the `.card-container` a Flexbox container and allowed the product cards to be arranged in a row.

---

## ↔️ Gap

I used:

```css
gap: 16px;
```

This creates consistent spacing between the product cards.

Instead of manually adding margins to every card, `gap` makes the spacing easier to manage.

---

## 🔄 Flex Wrap

I used:

```css
flex-wrap: wrap;
```

This allows the cards to move to another line when there is not enough horizontal space.

Without wrapping, multiple cards can become difficult to fit on smaller screens.

---

## ↔️ Justify Content

I used:

```css
justify-content: space-between;
```

This controls the distribution of the cards along the main axis.

I practiced understanding that `justify-content` works along the **main axis** of a Flexbox container.

---

# 📏 Flexible Card Sizing

For the cards, I used:

```css
.card {
    flex: 1;
    max-width: 350px;
    min-width: 250px;
    width: 100%;
}
```

### `flex: 1`

Allows the cards to share available space within the Flexbox container.

### `max-width: 350px`

Prevents each card from becoming unnecessarily wide.

### `min-width: 250px`

Sets a minimum width for the card.

### `width: 100%`

Allows the card to use the available width within its constraints.

---

# 🎨 Card Styling

The card continued using the styling concepts practiced on Day 01.

```css
.card {
    padding: 24px;
    border-radius: 62px;
    box-shadow: grey 0px 0px 20px 0px;
    background-color: lavenderblush;
    transition: transform 0.3s ease;
}
```

### Concepts practiced

* `padding`
* `border-radius`
* `box-shadow`
* `background-color`
* `transition`

---

# 🖱️ Card Hover Effect

I added a hover effect to make the card move slightly upward:

```css
.card:hover {
    transform: translateY(-10px);
}
```

### Understanding

`translateY()` changes the vertical position of the element.

A negative value moves the element upward.

```text
translateY(-10px)
        ↓
Move upward
```

---

# 🖼️ Product Image Styling

The product images were styled using:

```css
.card img {
    width: 100%;
    height: 202px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: #555 0px 0px 20px 0px;
    transition: transform 0.3s ease;
}
```

### Concepts practiced

#### `width: 100%`

Makes the image use the available card width.

#### `height: 202px`

Gives the image a fixed height.

#### `object-fit: cover`

Controls how the image fits inside its defined dimensions.

#### `border-radius`

Creates rounded corners.

#### `box-shadow`

Adds depth around the image.

#### `transition`

Makes the hover transformation smoother.

---

# 🔍 Image Hover Improvement

Initially, I used:

```css
.card img:hover {
    transform: translateY(-5px);
}
```

This moves the image upward.

However, the requirement was to create a **slight zoom effect** on the image.

So I improved it to:

```css
.card img:hover {
    transform: scale(1.05);
}
```

### What I learned

```text
translateY()
→ moves an element

scale()
→ changes the size / creates a zoom effect
```

This was an important practical improvement because I learned to choose the CSS transform based on the desired UI behavior.

---

# 🏷️ Price Styling

The price was styled using the `<h3>` element.

```css
.card h3 {
    font-size: 22px;
    margin-bottom: 15px;
    border: #555 3px solid;
    background: #64c180;
    box-shadow: #64c180 0px 0px 10px 0px;
    border-radius: 8px;
    width: fit-content;
    display: block;
    margin: 15px auto;
    padding: 5px 10px;
    transition: transform 0.3s ease;
}
```

### Concepts practiced

* `font-size`
* `border`
* `background`
* `box-shadow`
* `border-radius`
* `width: fit-content`
* `margin: auto`
* `padding`
* `transition`

### `width: fit-content`

This makes the price element take only the width required by its content instead of stretching across the card.

---

# 🏷️ Price Hover Effect

I also experimented with a hover effect on the price:

```css
.card h3:hover {
    transform: translateY(-5px);
}
```

This was not strictly required for the challenge, but I added it while experimenting with hover effects.

### Learning

Not every element needs an animation in a production UI.

Adding effects is useful for experimentation, but the final UI should use animation where it improves the user experience rather than adding unnecessary movement.

---

# 🔘 Button Styling

The button was styled using:

```css
.card button {
    width: 50%;
    padding: 10px;
    display: block;
    margin: 0 auto;

    border: none;
    border-radius: 8px;
    background-color: yellow;

    cursor: pointer;

    transition: 0.3s;
}
```

### Concepts practiced

* Width
* Padding
* `display: block`
* `margin: 0 auto`
* Removing the default border
* Border radius
* Background color
* Cursor
* Transition

---

# 🎨 Button Hover

I added:

```css
.card button:hover {
    transform: translateY(-2px);
    background-color: cornflowerblue;
    color: black;
}
```

This creates an interactive effect when the user moves the cursor over the button.

### Practiced concepts

* `:hover`
* `transform`
* `translateY()`
* `background-color`
* `color`
* `transition`

---

# 📱 Responsive Design

A major part of today's challenge was making the layout responsive.

### Desktop

The desired layout was:

```text
[ Card ]   [ Card ]   [ Card ]
```

### Mobile

The desired layout was:

```text
[ Card ]

[ Card ]

[ Card ]
```

---

# 📲 Media Query

I added:

```css
@media (max-width: 768px) {
    .card-container {
        flex-direction: column;
        align-items: center;
    }
}
```

### Understanding

```css
@media (max-width: 768px)
```

applies the CSS rules when the viewport width is **768px or less**.

Inside the media query:

```css
flex-direction: column;
```

changes the cards from a horizontal arrangement to a vertical arrangement.

```css
align-items: center;
```

keeps the cards centered.

---

# 🧠 Responsive Thought Process

Today's practice helped me understand the thought process behind responsive design:

```text
Requirement:
3 cards should appear in one row
        ↓
Need a parent container
        ↓
display: flex
        ↓
Need spacing
        ↓
gap
        ↓
Need cards to adapt
        ↓
flex: 1
max-width
min-width
        ↓
Need wrapping on smaller screens
        ↓
flex-wrap
        ↓
Need a mobile-specific layout
        ↓
@media
        ↓
flex-direction: column
align-items: center
```

This is more useful than simply memorizing CSS properties.

---

# ♿ Accessibility Improvement

I also identified an improvement in the image `alt` attributes.

Instead of generic values such as:

```html
alt="Product"
alt="Product 2"
alt="Product 3"
```

more meaningful values are better:

```html
alt="Wireless Headphones"
alt="Keyboard"
alt="Mouse"
```

Meaningful `alt` text provides better information about the image, especially for accessibility.

---

# 🐛 Problems & Improvements

## 1. Image hover was moving instead of zooming

### Initial approach

```css
.card img:hover {
    transform: translateY(-5px);
}
```

### Improvement

```css
.card img:hover {
    transform: scale(1.05);
}
```

### Lesson

Use `translateY()` for movement and `scale()` when the desired effect is zooming.

---

## 2. Responsive layout

I initially used:

```css
flex-wrap: wrap;
```

which helps cards move to another line when space is insufficient.

I then added an explicit mobile layout:

```css
@media (max-width: 768px) {
    .card-container {
        flex-direction: column;
        align-items: center;
    }
}
```

### Lesson

`flex-wrap` and media queries solve different parts of responsive behavior.

* `flex-wrap` allows wrapping.
* `@media` allows us to intentionally change the layout for a particular screen size.

---

## 3. Extra hover effect

I added:

```css
.card h3:hover {
    transform: translateY(-5px);
}
```

This was not required but helped me experiment with CSS hover states.

### Lesson

Experimentation is useful, but in a real UI I should consider whether an animation actually improves the user experience.

---

# 🧩 Practical Questions Solved Today

During today's practice, I worked through questions such as:

### How do I arrange three cards in one row?

Use a parent container with:

```css
display: flex;
```

### How do I create spacing between cards?

Use:

```css
gap: 16px;
```

### What happens when there is not enough space?

Use:

```css
flex-wrap: wrap;
```

### How do I make cards stack on mobile?

Use:

```css
flex-direction: column;
```

inside a media query.

### How do I center the cards on mobile?

Use:

```css
align-items: center;
```

### How do I make an image zoom on hover?

Use:

```css
transform: scale(1.05);
```

### How do I move an element upward?

Use:

```css
transform: translateY(-10px);
```

### How do I make an element smoothly animate?

Use:

```css
transition: transform 0.3s ease;
```

---

# 🛠️ Technologies & Properties Practiced

## HTML

* `div`
* `img`
* `h2`
* `h3`
* `p`
* `button`
* `alt`

## CSS

* `box-sizing`
* `margin`
* `padding`
* `min-height`
* `display`
* `flex`
* `flex: 1`
* `flex-wrap`
* `flex-direction`
* `justify-content`
* `align-items`
* `gap`
* `width`
* `max-width`
* `min-width`
* `object-fit`
* `border`
* `border-radius`
* `box-shadow`
* `background-color`
* `color`
* `font-size`
* `cursor`
* `transition`
* `transform`
* `translateY()`
* `scale()`
* `width: fit-content`
* `:hover`
* `@media`

---

# 🧠 Key Learnings

Today's most important learning was not just individual CSS properties.

I practiced converting a UI requirement into a technical solution.

### Example:

```text
3 cards
   ↓
Parent container
   ↓
display: flex
```

```text
Space between cards
   ↓
gap
```

```text
Cards should adapt
   ↓
flex: 1
max-width
min-width
```

```text
Cards should move to another line
   ↓
flex-wrap
```

```text
Mobile layout should be vertical
   ↓
@media
   ↓
flex-direction: column
```

```text
Image should zoom
   ↓
transform: scale()
```

```text
Element should move upward
   ↓
transform: translateY()
```

This helped me move from **memorizing CSS properties to thinking about how to solve UI problems with CSS.**

---

# 📸 Result

### Desktop View

Three product cards are displayed horizontally:

```text
[ Wireless Headphones ] [ Keyboard ] [ Mouse ]
```

### Mobile View

The cards are displayed vertically:

```text
[ Wireless Headphones ]

[ Keyboard ]

[ Mouse ]
```

Screenshots of the implementation are available in the `screenshots` folder.

---

# 📂 Files in This Day

```text
Day-02/
│
├── README.md
├── index.html
├── style2.css
├── product.png
├── product2.png
├── product3.png
│
└── screenshots/
    ├── desktop-view.png
    └── mobile-view.png
```

---

# 📈 Progress

| Skill               | Progress      |
| ------------------- | ------------- |
| HTML Structure      | 🟢 Practicing |
| CSS Styling         | 🟢 Practicing |
| Flexbox             | 🟢 Practicing |
| Card Layout         | 🟢 Practicing |
| Hover Effects       | 🟢 Practicing |
| Transitions         | 🟢 Practicing |
| Responsive Design   | 🟢 Practicing |
| Media Queries       | 🟢 Practicing |
| CSS Problem Solving | 🟡 Improving  |
| Coding Fluency      | 🟡 Improving  |

---

# 🏆 Day 02 Outcome

Started with:

```text
One Product Card
```

and built:

```text
Three Product Cards
        ↓
Flexbox Layout
        ↓
Spacing & Flexible Sizing
        ↓
Hover Effects
        ↓
Image Interaction
        ↓
Responsive Layout
        ↓
Mobile View
```

The main improvement today was learning to **extend an existing UI instead of starting from scratch**, while making independent decisions about layout, spacing, sizing, interaction, and responsiveness.

---

## 🔄 Next Practice

Continue strengthening HTML and CSS through practical UI challenges before moving to JavaScript.

**Focus:** Build → Experiment → Debug → Improve → Document.
