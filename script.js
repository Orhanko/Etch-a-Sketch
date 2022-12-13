let click = false
let gridContainer = document.querySelector(".sketchpad")
let randomColor
let defaultColor = "#2c2c2c"

gridContainer.addEventListener("mousedown", () => {
    click = !click;
    
});

gridContainer.addEventListener("mouseup", () => {
  click = !click;
  
});

gridContainer.style.gridTemplateColumns = "repeat(20, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(20, 1fr)";

for(let i = 0 ; i < 400 ; i++){
    let square = document.createElement("div")
    square.classList.add('gridElement');
    gridContainer.appendChild(square);    
}

let squares = document.querySelectorAll(".gridElement");

function defaultColorFunc(){
for(let i = 0 ; i < squares.length ; i++){
    let gridElement = squares[i] 
    let changeColor = function () {
        if(click==true){
            gridElement.style.backgroundColor = defaultColor
        }
    }
    gridElement.addEventListener('mouseover', changeColor)
}
}

function randomColorFunc(){
    for(let i = 0 ; i < squares.length ; i++){
        let gridElement = squares[i] 
        let changeColor = function () {
            if(click==true){
                let red = Math.floor(Math.random() * 255) + 1;
                let green = Math.floor(Math.random() * 255) + 1;
                let blue = Math.floor(Math.random() * 255) + 1;
                randomColor = "rgb(" + red + "," + green + "," + blue + ")";
                gridElement.style.backgroundColor = randomColor
            }
        }
        gridElement.addEventListener('mouseover', changeColor)
    }
}

function eraser(){
    for(let i = 0 ; i < squares.length ; i++){
        let gridElement = squares[i] 
        let changeColor = function () {
            if(click==true){
                gridElement.style.backgroundColor = "white"
            }
        }
        gridElement.addEventListener('mouseover', changeColor)
    }
}

function reset(){
    for(let i = 0 ; i < squares.length ; i++){
        let gridElement = squares[i] 
        gridElement.style.backgroundColor = "white"   
    }
}