const more = document.getElementById("more");
const less = document.getElementById("less");
var money = 0;

function add() {
    money += 100;
}

more.onclick = add;

function subtract() {
    money -= 100;
}

more.onclick = subtract;