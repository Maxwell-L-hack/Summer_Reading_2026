const more = document.getElementById("more");
const less = document.getElementById("less");
const moneyAmount = document.getElementById("money amount");
const bidder = document.getElementById("bidder");
var money = 0;

function add() {
    money += 100;
    console.log("money added");
    if (money) moneyAmount.textContent = `$${money}`;
    switch (money) {
        case 0:
            bidder.textContent = "There are no bidders.";
            break;
        case 100:
            bidder.textContent = "There are three bidders.";
            break;
        case 500:
            bidder.textContent = "There are two bidders.";
            break;
        case 1000:
            bidder.textContent = "There is one bidder.";
            break;
    }
}


function subtract() {
    money -= 100;
    console.log("money subtracted");
    if (money) moneyAmount.textContent = `$${money}`;
};
less.onclick = subtract;
more.onclick = add;
