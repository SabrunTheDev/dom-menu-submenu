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
   - This part suggests that additional HTML and CSS have been added to the code, but the specific details are not provided.

### Part 3

4. **Setting up the Sub Menu:**
   - The code selects the element with the id "sub-menu" and assigns it to the variable `subMenuEl`.
   - The height, background color, and position of `subMenuEl` are set.

### Part 4 & 5

5. **Handling Menu Clicks:**

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
