## Chromestesia

### Background and Overview

Chromestesia is a songwriting tool, inspired by the metronome, that uses audio and visuals to help musicians maintain timing and tempo. Traditionally, a metronome uses only audible beats to assist in staying on tempo, so what sets this tool apart is the use of visuals to enhance the songwriting experience.

[Chromesthesia](https://en.wikipedia.org/wiki/Chromesthesia) is a type of synesthesia is which heard sounds automatically and involuntarily evoke an experience of color.

Users will have the ability to select a color or set of colors which will then be rendered in time with the tempo and time signature they selected.

Complimentary colors will also be given to the user based on the color harmonies.


### Functionality & MVP

With Chromestesia, users will be able to:

+ Select colors from a color wheel
+ Select desired tempo
+ Select a time signature
+ Save color schemes in RGB format
+ Present options in an a visually appealing way using modals
+ Use keyboard shortcuts to quickly change tempo, start/stop, etc.

### Wireframes

Chromestesia will be a minimally styled, single page app. Any necessary elements to be displayed will be shown as a modal. The metronome will be heard with a subtle click and the selected colors will be displayed in the full dimensions of the browser window. This app is meant to be used in full screen. Using a key press, the modal below will be displayed.

![](https://raw.githubusercontent.com/pedropreciado/chromestesia/master/docs/wireframes/form.png)

In the options modal, the user will be able to select the tempo incrementally and select a custom time signature. Squares of random colors will be displayed based on the number of beats the user selected. Colors can then be selected from a color wheel and compliments of each of those colors will be displayed on the right.

The user will then press a button to begin a count off and will be able to pause/play the metronome using the space bar. The selected colors will then be rendered in time with the selected tempo and time signature.



### Architecture and Technologies

Chromestesia will use:

+ `HTML5 Canvas` for DOM manipulation and displaying content.
+ JavaScript for necessary logic.
+ `jquery-wheelcolorpicker` for color selection.

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
