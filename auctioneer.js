const more = document.getElementById("more");
const less = document.getElementById("less");
const moneyAmount = document.getElementById("money amount");
const bidder = document.getElementById("bidder");
var money = 0;

function updateBidder() {
    if (money) moneyAmount.textContent = `$${money}`;

    switch (money) {
        case 0:
            bidder.textContent = "There are no bidders.";
            break;
        case 1000:
            bidder.textContent = "There are three bidders.";
            break;
        case 5000:
            bidder.textContent = "There are two bidders.";
            break;
        case 10000:
            bidder.textContent = "There is one bidder.  This bidder is the Corporate Corporation, a group known for research and questionable morals.";
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

