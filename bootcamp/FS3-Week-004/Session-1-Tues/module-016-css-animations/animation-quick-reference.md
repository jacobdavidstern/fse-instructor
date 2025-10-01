## CSS Animation Property Quick Reference

### Property	Purpose	Example

```css
@keyframes name	Defines animation steps.	@keyframes fade-in { from {opacity:0;} to {opacity:1;} }
animation-name	Links element to keyframes.	animation-name: fade-in;
animation-duration	Time for one cycle.	animation-duration: 3s;
animation-delay	Wait before starting.	animation-delay: 2s;
animation-iteration-count	Number of repeats or infinite.	animation-iteration-count: 5;
animation-timing-function	Speed curve.	linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(...)
animation-direction	Playback direction.	normal, reverse, alternate
animation-fill-mode	Styles before/after animation.	none, forwards, backwards, both
animation-play-state	Play or pause.	running, paused
animation (shorthand)	All in one line.	animation: fade-in 3s ease-in 1s infinite;
```

#### Longhand vs Shorthand Cheat Block
Longhand:

```css
.longhand {
  animation-name: complex-animation;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}
```
#### Shorthand:

```css
.shorthand {
  animation: complex-animation 4s ease-in-out 1s infinite normal none running;
}
```

#### Shorthand Order: name duration timing-function delay iteration-count direction fill-mode play-state
---

## CSS Animation Defaults Card
Property	Default	Meaning
```css
animation-name	none	No animation runs.
animation-duration	0s	Instant change.
animation-timing-function	ease	Slow → fast → slow.
animation-delay	0s	Starts immediately.
animation-iteration-count	1	Runs once.
animation-direction	normal	Start → end each time.
animation-fill-mode	none	Reverts to original styles.
animation-play-state	running	Plays automatically.
```

### Ready‑to‑Paste Snippet Library
#### Basic Fade‑In

```css
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.fade-in {
  animation: fade-in 2s ease-in forwards;
}
```

#### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.3; }
}

.pulse {
  animation: pulse 1s ease-in-out infinite;
}
```

#### Glow
```css
@keyframes glow {
  from { box-shadow: 0 0 5px blue; }
  to   { box-shadow: 0 0 20px blue; }
}

.glow {
  animation: glow 2s ease-in-out infinite alternate;
}
```

#### Width Change with Timing Function
```css
@keyframes size-change {
  from { width: 50px; }
  to   { width: 100px; }
}

.linear-sizing { animation: size-change 3s linear infinite; }
.ease-in-sizing { animation: size-change 3s ease-in infinite; }
.ease-out-sizing { animation: size-change 3s ease-out infinite; }
.ease-in-out-sizing { animation: size-change 3s ease-in-out infinite; }
.custom-timing { animation: size-change 3s cubic-bezier(0.215, 0.610, 0.355, 1) infinite; }
```

#### Complex Multi‑Property Animation
```css
@keyframes complex-animation {
  0%   { background: blue;   opacity: 0.5; border-radius: 0%; }
  25%  { background: purple; opacity: 0.7; border-radius: 25%; }
  75%  { background: orange; opacity: 1;   border-radius: 75%; }
  100% { background: red;    opacity: 0.8; border-radius: 50%; }
}

.longhand {
  animation-name: complex-animation;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
}

.shorthand {
  animation: complex-animation 4s ease-in-out 1s infinite;
}
```

#### Hover‑Triggered Animation
```css
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25%      { transform: rotate(5deg); }
  75%      { transform: rotate(-5deg); }
}

.wiggle-on-hover:hover {
  animation: wiggle 0.5s ease-in-out;
}
```

#### Multiple Animations on One Element
```css
@keyframes fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slide {
  from { transform: translateX(-50px); }
  to   { transform: translateX(0); }
}

.fade-slide {
  animation: fade 1s ease-out, slide 1s ease-out;
}
```
