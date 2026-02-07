# Google Fonts + Fontawesome

## 1. Find Google variable width font and verify current Fontawesome version string:

`https://fonts.google.com`

Example: Roboto Variable font with Fontawesome 7.1.0
`https://fonts.google.com/specimen/Roboto?query=roboto+variable`

## 2. Verify latest Fontawesome version string

`https://github.com/FortAwesome/Font-Awesome/releases`

## 3. Add Google Font and Fontawesome CDN to html head:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Name</title>
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.1.0/css/all.min.css"
      integrity="sha512-..."
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght,XOPQ,XTRA,YOPQ,YTDE,YTFI,YTLC,YTUC@8..144,100..1000,96,468,79,-203,738,514,712&display=swap"
      rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## 4. Add Google font to index.css

```css
/* client/src/index.css */

:root {
  /* Global typography baseline */
  font-family: "Roboto Flex", system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  line-height: 1.5;

  /* Color + theme defaults */
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  /* Rendering improvements */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Optional: semantic weight helpers */
.roboto-regular {
  font-weight: 400;
}

.roboto-medium {
  font-weight: 500;
}

.roboto-bold {
  font-weight: 700;
}

/* Global reset */
body {
  margin: 0;
}

/* Links (optional) */
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

/* Buttons */
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
```

### Part 2: Color Palette
- [ ] Choose color palette (4-6 colors) using:
  - Coolors.co - https://coolors.co/
  - Tailwind Color Generator - https://uicolors.app/create
- [ ] Select 2-3 primary colors (red/orange, dark gray, lime green), 3-4 neutrals (white, light gray, medium gray), 4 semantic colors (success green, error red, warning amber, info blue)
- [ ] Document color hex codes
```sh
    *-primary changes the color to blue #007bff.
    *-info changes the color to teal #17a2b8.
    *-success changes the color to green #28a745.
    *-warning changes the color to yellow #ffc107.
    *-danger changes the color to red #dc3545.
    *-dark changes the color to dark gray #343a40.
    *-secondary changes the color to gray #6c757d.
    *-light changes the color to light gray #f8f9fa.
    *-white changes the color to white #ffffff.
```
