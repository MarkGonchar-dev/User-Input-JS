
const element = document.getElementById("userage");
element.addEventListener("change", () => {alert((new Date().getFullYear()) - Number(element.value));});

let N = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

const btn = document.getElementById("print_length");
btn.addEventListener("click", () => {console.log(N.length);})

const color = document.getElementById("change_color");
const block = document.getElementById("block");
color.addEventListener("click", () => {block.style.color = getColor();})

// Взяв код з 9-го уроку

function getColor() {
    let r = randColor();
    let g = randColor();
    let b = randColor();
    return "rgb(" + r + "," + g + "," + b + ")";
}

function randColor() {
    return Math.round(Math.random() * 255);
}
