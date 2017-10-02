## Chromestesia

### Background and Overview

Chromestesia is a songwriting tool that uses visuals and audio to help keep musicians in time. A traditional metronome only uses audible beats to help the musician keep tempo, but what sets this tool apart is the use of visuals to enhance the songwriting experience.

[Chromesthesia](https://en.wikipedia.org/wiki/Chromesthesia) is a type of synesthesia is which heard sounds automatically and involuntarily evoke an experience of color.

Users will have the ability to select a color or colors of their choosing, and the selected set of colors will be rendered in time with the tempo and time signature they selected.

Also, users can be given complimentary colors based on the color harmonies.

### Functionality & MVP

With Chromestesia, users will be able to:

+ Select colors from a color wheel
+ Select desired tempo
+ Select a time signature
+ Save color schemes in RGB format
+ Present options an a visually appealing way using modals
+ Use keyboard shortcuts to quickly change tempo, start/stop, etc.

### Wireframes

Chromestesia will be a minimally styled, single page app. Any necessary elements needed to be displayed will be shown as a modal. The metronome will be heard with a subtle click and the selected colors will be displayed in the full dimensions of the browser window. This app is meant to be used in full screen. Using a key press, the modal below will be displayed.

![](https://raw.githubusercontent.com/pedropreciado/chromestesia/master/docs/wireframes/form.png)

In the options modal, the user will be able to select the tempo incrementally, and select custom time signature. Squares of random colors will then be displayed, and the amount will be based on the number of beats the user selected. The user will then select colors from the color wheel, and compliments of each color selected will be displayed on the right. The user will then press the button to begin a count off, and can pause/play the metronome using the space bar.

### Architecture and Technologies

Chromestesia will use:

+ `HTML5 Canvas` for DOM manipulation and displaying content.
+ JavaScript for necessary logic.

This app will also have several scripts, including:

`visual.js`: This will contain the logic to render the options selected by the user.

`color_wheel.js`: This will contain the code to render the available colors, allow user to select the colors, and return the colors to `visual.js`.

`options.js`: This script will contain all of the inputs needed to be filled out by the user.

### Timeline

**Day 1 and 2**: Have landing page ready and styled to be welcoming to the visitor. Also, have project skeleton ready with necessary packages installed.

+ Begin creating `index.html` file, including form
+ Have Canvas rendered and styled
+ Have form laid out and ready for input
+ Choose inviting fonts and color schemes
+ Begin designing color selector

**Day 3 and 4**: Begin working on scripts and test input logic. Also research on how to set a sound and display colors on certain time.

+ Script form input logic
+ Test return values from `color_wheel.js` and `options.js` to `visual.js`
+ Begin logic for suggested complimentary colors.
+ Select default colors
+ Enter keys needed to change tempo and other functionalities
