# Dom-Menu-SubMenu

## ALAB 316.3.1: DOM Manipulation (Part Two)

## Description

### Part 1

1. **Selecting and Styling the Main Element:**

   - The code selects the `<main>` element using `document.querySelector` and assigns it to the variable `mainEl`.
   - The background color of `mainEl` is set using a CSS variable (`--main-bg`).
   - The inner HTML of `mainEl` is set to a heading (`<h1>DOM Manipulation</h1>`).
   - The class of `mainEl` is set to "flex-ctr" for flexbox centering.

2. **Setting up the Top Menu:**
   - The code selects the element with the id "top-menu" and assigns it to the variable `topMenuEl`.
   - The height and background color of `topMenuEl` are set.
   - An array `menuLinks` is defined, representing the top menu items and their sub-links.
   - Using `forEach`, anchor elements are created based on the `menuLinks` array and appended to `topMenuEl`.

### Part 2

3. **Adding Additional HTML & CSS:**

- Added some additional HTML

```html
<header>
  <nav id="top-menu"></nav>
  <!-- Add the <nav> element below -->
  <nav id="sub-menu"></nav>
</header>
```

- Added some additional CSS

```css
header,
#top-menu {
  position: relative;
}
#top-menu {
  z-index: 20;
}
#sub-menu {
  width: 100%;
  z-index: 10;
  transition: top 0.5s ease-out;
}
#sub-menu a:hover {
  background-color: var(--top-menu-bg);
}
nav a.active {
  background-color: var(--sub-menu-bg);
  color: var(--main-bg);
}
```

### Part 3

4. **Setting up the Sub Menu:**
   - The code selects the element with the id "sub-menu" and assigns it to the variable `subMenuEl`.
   - The height, background color, and position of `subMenuEl` are set.

### Part 4 & 5

5. **Handling Menu Clicks:**

- Updated `menuLinks` array:

```javascript
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
```

- The code selects all anchor elements within `topMenuEl` and assigns them to the variable `topMenuLinks`.
- An event listener is added to `topMenuEl` to handle clicks.
- When a menu item is clicked, it prevents the default behavior, identifies the clicked item, and toggles the "active" class.
- The sub-menu (`subMenuEl`) is adjusted to be shown or hidden based on the presence of sub-links in the clicked menu item.
- The submenu content is dynamically built based on the clicked menu item's sub-links.
- If the clicked item is "About," the content of `mainEl` is updated to show an "About" heading.

6. **Handling Sub-Menu Clicks:**
   - An event listener is added to `subMenuEl` to handle clicks.
   - When a sub-menu item is clicked, it prevents the default behavior, toggles the "active" class, and updates the content of `mainEl`.

### Additional Notes:

- The code relies on CSS variables for styling flexibility.
- It uses event delegation to handle menu item clicks efficiently.
- The structure suggests a dynamic menu with the ability to show sub-menus and update the main content based on user interactions.
