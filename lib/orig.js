document.body.onkeyup = function(event){
    if(event.keyCode == 32){
      event.preventDefault();
      $(".options-form").toggle();
    }
}
let colors = [];
let inputs;
let number;

$("#time-sig-submit").on("click", (event) => {
  event.preventDefault();

  number = document.getElementById("time-sig").value;
  inputs = document.getElementsByClassName("colorInputs");
  console.log(inputs);

  for (let j = 0; j < inputs.length; j ++) {
    inputs[j].style.display = "none";
  }

  for (let i = 0; i < number; i ++) {
    inputs[i].style.display = "block";
  }
  for (let i = 0; i < number; i++) {
    console.log(inputs[i]);
    colors.push(inputs[i].value)
  }
})

// document.getElementById("about").addEventListener("click", () => {
//   event.preventDefault();
//
//   ${"#about-text"}.toggle();
// })

$("#ColorInput1").css("background-color", `#${document.getElementById('ColorInput1').value}`);
$("#ColorInput2").css("background-color", `#${document.getElementById('ColorInput2').value}`);
$("#ColorInput3").css("background-color", `#${document.getElementById('ColorInput3').value}`);
$("#ColorInput4").css("background-color", `#${document.getElementById('ColorInput4').value}`);
$("#ColorInput5").css("background-color", `#${document.getElementById('ColorInput5').value}`);
$("#ColorInput6").css("background-color", `#${document.getElementById('ColorInput6').value}`);
$("#ColorInput7").css("background-color", `#${document.getElementById('ColorInput7').value}`);


$("#ColorInput1").on("change", (event) => {
  console.log(event);
  colors[0] = document.getElementById('ColorInput1').value
  $("#ColorInput1").css("background-color", `#${event.target.value}`);
});
$("#ColorInput2").on("change", (event) => {
  colors[1] = document.getElementById('ColorInput2').value

  $("#ColorInput2").css("background-color", `#${event.target.value}`);
});
$("#ColorInput3").on("change", (event) => {
  colors[2] = document.getElementById('ColorInput3').value

  $("#ColorInput3").css("background-color", `#${event.target.value}`);
});
$("#ColorInput4").on("change", (event) => {
  colors[3] = document.getElementById('ColorInput4').value
  $("#ColorInput4").css("background-color", `#${event.target.value}`);
});
$("#ColorInput5").on("change", (event) => {
  colors[4] = document.getElementById('ColorInput5').value
  $("#ColorInput5").css("background-color", `#${event.target.value}`);
});
$("#ColorInput6").on("change", (event) => {
  colors[5] = document.getElementById('ColorInput6').value
  $("#ColorInput6").css("background-color", `#${event.target.value}`);
});
$("#ColorInput7").on("change", (event) => {
  colors[6] = document.getElementById('ColorInput7').value
  $("#ColorInput7").css("background-color", `#${event.target.value}`);
});

// grab colors
document.addEventListener("submit", (event) => {
  console.log(colors.length);

  let bleep = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");


  const bpm = document.getElementById("tempo").value;
  const ms = 60000 / bpm;

  event.preventDefault();


  // let color1 = document.getElementById('ColorInput1').value
  // let color2 = document.getElementById('ColorInput2').value
  // let color3 = document.getElementById('ColorInput3').value
  // let color4 = document.getElementById('ColorInput4').valackground-color/
  colors = [color1, color2, color3, color4];



  const drawCanvas = () => {
    const canvasEl = document.getElementById("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvasEl.getContext('2d');

    // const first = () => {
    //   context.fillStyle = color1;
    //   context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    //   context.beginPath();
    // }
    //
    // const second = () => {
    //   context.fillStyle = color2;
    //   context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    //   context.beginPath();
    //
    // }
    //
    // const third = () => {
    //   context.fillStyle = color3;
    //   context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    //   context.beginPath();
    //
    // }
    //
    // const fourth = () => {
    //   context.fillStyle = color4;
    //   context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    //   context.beginPath();
    // }

    let i = 0;

    let metronome = () => {
      context.fillStyle = `#${colors[i]}`;
      console.log(colors[i]);
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      context.beginPath();
      context.fillText(`${i}`, window.innerWidth / 2, window.innerHeight / 2)
      bleep.play();
      i += 1;
      i = i % colors.length;
    }

    let time = window.setInterval(metronome, ms);

    document.addEventListener("click", () => window.location.reload())
  }

  drawCanvas();
  $(".options-form").toggle();
})



window.addEventListener("resize", function(){
  drawCanvas();
})
