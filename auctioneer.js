const more = document.getElementById("more");
const less = document.getElementById("less");
const moneyAmount = document.getElementById("money amount");
const bidder = document.getElementById("bidder");
const continueButton = document.getElementById("continue");
var money = 0;

function updateBidder() {
    if (money) moneyAmount.textContent = `$${money}`;

    switch (money) {
        case  0:
            bidder.textContent = "Start rasing the price to start the auction.";
            break;
        case 1000:
            bidder.textContent = "There are three bidders.";
            break;
        case 5000:
            bidder.textContent = "There are two bidders.";
            break;
        case 11000:
            bidder.textContent = "There is one bidder.  This bidder is the Corporate Corporation, a group known for research and questionable morals.";
            break;
        case (money >= 12000):
            bidder.textContent = "There are no bidders.  Lower the price.";
            break;
    }
}

function add() {
    money += 1000;
    console.log("money added");
    updateBidder();
}


function subtract() {
    money -= 1000;
    console.log("money subtracted");
    updateBidder();
};
less.onclick = subtract;
more.onclick = add;
function contButton() {
    money = 11000;
    console.log("continue");
    updatecontinueButton();
}

updateBidder();