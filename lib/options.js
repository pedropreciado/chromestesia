
let colors;

let color1 = document.getElementById('ColorInput1').value
let color2 = document.getElementById('ColorInput2').value
let color3 = document.getElementById('ColorInput3').value
let color4 = document.getElementById('ColorInput4').value

document.addEventListener("click", () => window.location.reload());

colors = [color1, color2, color3, color4];

let circles = [];

let bpm = document.getElementById("tempo").value;
const ms = 60000 / bpm;

document.addEventListener("submit", () => {
  const handleResize = () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvasEl.getContext("2d");

  }

  window.addEventListener("resize", () => {
    handleResize();
  })

  handleResize;

  window.setInterval(() => {
    colors.map((color) => ({
      x: window.innerHeight / 2,
      y: window.innerWidth / 2,
      r: 10,
      color: `${color}`
    }))

  }, ms)
})

const drawCircle = ({ x, y, r, color}) => {
  window.context.fillStyle = color;
  window.context.beginPath();
  window.context.arc(x, y, r, 0, 2 * Math.PI, false);
  window.context.closePath();
  window.context.fill();
}

const drawCanvas = () => {
  for (let i = circles.length - 1; i >= 0; i -= 1) {
    drawCircle(circles[i]);
    circles[i].r += 30;
    if (circles[i].r > window.innerWidth) {
      circles.splice(1, i)
    }
  }

  window.context.drawImage(canvas, 0, 0);
  window.requestAnimationFrame(drawCanvas);
  $("options-form").toggle;
}

window.requestAnimationFrame(drawCanvas);
