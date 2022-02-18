# Pet Rescue Website

Pet Rescue is a Wordpress Theme I reproduced from [EnvatoMarket](https://themeforest.net/item/pet-rescue-animals-shelter-charity-wp-theme/9347370?_ga=2.200040302.1154823803.1645215725-565922936.1643977265). I recreated this theme as a way to practice using CSS animation effects such as transitions, keyframes, as well as [GSAP](https://greensock.com/), one of the most popular web animation libraries. After viewing websites like [Handwrytten](https://www.handwrytten.com/) and [WebbyAwards](https://www.webbyawards.com/crafted-with-code/wonderful-weekends/), I was inspired to learn more.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Access dropdown menus in the top navbar by hovering over them
- Scroll through carousel by clicking the directional arrows, or shaded buttons at the bottom
- See the profile icons fade in when hovering over pet profiles
- See news images fade to semitransparent black when hover over news articles
- See sponsor logos fade in as they scroll into view, and fade out when no longer in view

### Screenshot

![screenshot](https://res.cloudinary.com/do6crtyly/image/upload/v1645180978/pet%20rescue/demo1_disn6q.png)

### Links

- [Live Site URL](https://pet-rescue-site.netlify.app/)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone the following repositories
$ git clone https://github.com/vlsalina/pet-rescue-website.git

# Go into project folder
$ cd pet-rescue-website

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [GSAP](https://greensock.com/) - web animation library
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

#### GSAP

I have always wanted to learn animation. Seeing things move across the screen and take different forms makes websites seem to come to "life". This can be done in CSS using declarations such as the [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) effect and [keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes). While these are great tools to animate [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) elements themselves, it can become quite challenging the more complex the animations become as well.

A great example of this can be trying to animate multiple things in subsequent fashion. When the number of elements is small, say 3, applying [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) is quite manageable. But when the number becomes 10 or more, for instance, you would have to manually change the timings for each one, which can become incredibly tedious and time-consuming.

I managed to resolve this issue by using a web animation library called [GSAP](https://greensock.com/). GSAP provides a method called [timeline](https://greensock.com/docs/v3/GSAP/Timeline), a tool that acts as a container for [tweens](https://greensock.com/docs/v3/GSAP/Tween) and other timelines, making it simple to control them as a whole and precisely manage their timing in a few simple, and easily understandable lines of code.

As an example, if I wanted to animate 3 circle elements subsequently on the page (aptly class named circle1, circle2, and circle3), I could do so in essentially one line of code:

```javascript
// with Timelines (cleaner, more versatile)
var gsap = require("gsap");

var tl = gsap
  .timeline()
  .to(".circle1", { x: 100, duration: 1 })
  .to(".circle2", { y: 50, duration: 1 })
  .to(".circle3", { opacity: 0, duration: 1 });
```

#### IntersectionObserver

"How" to animate things with GSAP was one thing, but "when" is another thing. I noticed a common feature in a lot of websites that elements tend "fade into view" as the user scroll downed the page. With some research, I learned that this can be achieved with the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API. The API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport).

Applying a fade-in feature to designated elements with IntersectionObserver was fairly easy, and can be done so in 2 steps:

1. Call the IntersectionObserver constructor
2. Assign a target element to be observed

The following example demonstrates how to set this up:

###### Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other:

```javascript
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver( // callback, options);
```

###### Once you have created the observer, you need to give it a target element to watch:

```javascript
let target = document.querySelector("#listItem");
observer.observe(target);
```

The "root" element in the options object is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`.

The "rootMargin" property is the margin around the root element.

And the "threshold" property indicates at what percentage of the target's visibility the observer's callback should be executed.

### Continued development

Create unit and integration tests with Jest/React-Testing-Library.

### Useful resources

- [CSS-Only Carousel](https://css-tricks.com/css-only-carousel/) - This helped me build a carousel component using only pure HTML and CSS. I really liked this pattern and will use it going forward.
- [scroll-snap-stop](https://css-tricks.com/almanac/properties/s/scroll-snap-stop/) - This is an amazing article which helped me finally understand how to snap images while scrolling through a carousel. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@vlsalina](https://www.frontendmentor.io/profile/vlsalina)
