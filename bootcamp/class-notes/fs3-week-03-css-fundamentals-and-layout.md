fsei-week-03-css-fundamentals-and-layout

CSS Fundamentals & Layout
Session 5
Chrome Dev Tools Intro. Flexbox. CSS Grid Layout

Session 4
Box Model. Typography, Colors, Display & Position. Office Hours

## chrome-dev-tools

## Module 09
### box-sizing: border-box; 
CSS property changes how the width and height of an element are calculated, including padding and borders within the specified dimensions. This makes it easier to size elements without worrying about additional space from padding or borders.

## transitions:
```css
/* Main business card */
.business-card {
  background-color: white;
  width: 350px;
  box-sizing: border-box;
  padding: 8px 16px;
  border: 2px solid white;
  border-radius: 8px;
  margin: 4px, auto;
  /*  stretch goals */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
/*  stretch goals */
/* Hover effect for interactivity */
.business-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border-color: white;
}
```

## Module 10
### Display
- inline
- block
- inline-block
- hidden
- invisible

```css
/* no space, can't be seen */
.invisible {
  display: none;
}
/* takes up space but can't be seen */
.hidden {
  visibility:visible;
}
```

### Position
- static (default, element flows)
- fixed (anchored to viewport, doesn't scroll)
- absolute (positioned relative to nearest non-static ancestor, removed from flow)
- relative (moves relative to position, affects layout)
- sticky (acts like relative until scroll threshold, then sticks like fixed)

## Typography
- font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;   


feat(week2–4): rename coursework/ live-lessons/; complete sessions 4–8 modules 9–16; Includes bio page, landing page, animations, and Bootstrap/Tailwind components.


FS3-Week3-Session 2 class notes (20250829)

Responsive Design

1. Slice up the image (desktop or mobile) and determine the general structure
2. Create the skeleton for desktop/tablet/mobile
3. Basic html structure
4. Adding the header -> desktop › tablet› mobile
5. Add the nav/logo
6. Add a main blank section
7. Add a footer with some text in there
8. After skeleton start at the main section and start filling the rest in

And if you frame it with a touch of curiosity—like “Curious how folks define a hero image in practice”—you sidestep any risk of sounding like you’re quizzing people. It’s ambient stewardship in action: modeling inquiry, inviting shared understanding, and maybe even sparking a config tangent about how hero images interact with semantic HTML or viewport settings.

Other phrases that carry subtle weight in dev or teaching spaces? “Just curious,” “for future reference,” “no strong opinion but…”—they all do quiet work.