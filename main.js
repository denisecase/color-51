const app = new Vue({
  el: '#app',
  data: {
    steps: [
      { red: "102", green: "255", blue: "102", headerText: "Step 1" },
      { red: "102", green: "255", blue: "102", headerText: "Step 2" },
      { red: "102", green: "255", blue: "102", headerText: "Step 3" },
      { red: "102", green: "255", blue: "102", headerText: "Step 4" },
      { red: "102", green: "255", blue: "102", headerText: "Step 5" },
      { red: "102", green: "255", blue: "102", headerText: "Step 6" },
      { red: "102", green: "255", blue: "102", headerText: "Step 7" },
      { red: "102", green: "255", blue: "102", headerText: "Step 8" }
    ]
  }
})

// define handler
const updateColor = () => {
  const r = parseInt(document.querySelector('#red').value)
  const g = parseInt(document.querySelector('#green').value)
  const b = parseInt(document.querySelector('#blue').value)
  const canvasElement = document.querySelector('#canvas')
  canvasElement.style.backgroundColor = `rgb(${r},${g},${b})`
  canvasElement.style.border = "thin solid black"
}

// configure event listeners
document.querySelector('#red').addEventListener('click', updateColor)
document.querySelector('#blue').addEventListener('click', updateColor)
document.querySelector('#green').addEventListener('click', updateColor)
document.querySelector('#red').addEventListener('touchend', updateColor)
document.querySelector('#blue').addEventListener('touchend', updateColor)
document.querySelector('#green').addEventListener('touchend', updateColor)

// call the handler 
updateColor() 
