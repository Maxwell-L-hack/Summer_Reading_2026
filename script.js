// ===== DOM ELEMENTS =====
const number = document.querySelector('#text_box');
const more = document.getElementById("more");
const less = document.getElementById("less");
const moneyAmount = document.getElementById("money amount");
const bidder = document.getElementById("bidder");
const continueButton = document.getElementById("continue");
const input = document.querySelector('#text_field');
const dnaInput = document.getElementById("dna_code");
const finalPasswordInput = document.getElementById("final_password");

// ===== CONSTANTS =====
const numberToCheck = "0000:00FF";
const answerToCheck = "MacOS9.1.26";
const dnA1 = "Noj txhua yam";
const dnA2 = "Kai vao";
const dnA3 = "Kjotteter";

// ===== DEBUG =====
console.log("text_box:", number);
console.log("text_field:", input);
console.log("dna_code:", dnaInput);
console.log("final_password:", finalPasswordInput);

// ===== AUCTION VARIABLES =====
var money = 0;

// ===== FUNCTION DEFINITIONS =====

// Auction Code Check
function checkAuctionCode(event) {
    if (event.key === "Enter") {
        let numberValue = number.value;
        if (numberValue.includes(numberToCheck)) {
            console.log("Correct code entered");
            number.removeEventListener('keypress', checkAuctionCode);
        } else {
            console.log("That is not the correct code");
        }
    }
}

// Update Bidder Display
function updateBidder() {
    if (money) {
        moneyAmount.textContent = `$${money}`;
    } else {
        moneyAmount.textContent = `$0`;
    }

    switch (money) {
        case 0:
            bidder.textContent = "Start raising the price to start the auction.";
            break;
        case 1000:
            bidder.textContent = "There are three bidders.";
            break;
        case 5000:
            bidder.textContent = "There are two bidders.";
            break;
        case 11000:
            bidder.textContent = "There is one bidder. This bidder is the Corporate Corporation, a group known for research and questionable morals.";
            break;
        default:
            if (money >= 12000) {
                bidder.textContent = "There are no bidders. Lower the price.";
            }
            break;
    }
}

// Add Money
function add() {
    money += 1000;
    console.log("money added");
    updateBidder();
}

// Subtract Money
function subtract() {
    money -= 1000;
    console.log("money subtracted");
    updateBidder();
}

// Continue Button
function contButton() {
    money = 11000;
    console.log("continue");
    updateBidder();
}

// DNA Recovery Code Check
function checkDnarecCode(event) {
    if (event.key === "Enter") {
        let inputValue = input.value;
        if (inputValue.includes(answerToCheck)) {
            console.log("Correct code entered");
            input.removeEventListener('keypress', checkDnarecCode);
        } else {
            console.log("That is not the correct code");
        }
    }
}

// Change to Desktop
function changeToDesktop() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('desktop').style.display = 'flex';
    location.hash = 'congratulations_dialog';
}

// Login Button Check
function loginButtonCheck() {
    let finalPassword = finalPasswordInput.value;
    finalPasswordCheck(finalPassword);
}

// Final Password Check
function finalPasswordCheck(finalPassword) {
    console.log(finalPassword);
    if (finalPassword === "IL0V3money!") {
        changeToDesktop();
    } else {
        console.log("That is not the correct code");
    }
}

// Game Code Check
function checkGameCode(event) {
    if (event.key === "Enter") {
        let dnaCodeString = dnaInput.value;
        if (dnaCodeString.includes(dnA1)) {
            dnaInput.removeEventListener('keypress', checkGameCode);
            window.location.href = 'dna0/dna.html';
        } else if (dnaCodeString.includes(dnA2)) {
            dnaInput.removeEventListener('keypress', checkGameCode);
            window.location.href = 'dna1/dna.html';
        } else if (dnaCodeString.includes(dnA3)) {
            dnaInput.removeEventListener('keypress', checkGameCode);
            window.location.href = 'dna2/dna.html';
        }
    }
}

// ===== EVENT LISTENERS =====

// Auction code input
if (number) {
    number.addEventListener('keypress', checkAuctionCode);
} else {
    console.warn("Element #text_box not found");
}

// Auction buttons
less.onclick = subtract;
more.onclick = add;

// DNA recovery code input
if (input) {
    input.addEventListener('keypress', checkDnarecCode);
} else {
    console.warn("Element #text_field not found");
}

// Final password input
if (finalPasswordInput) {
    finalPasswordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let finalPassword = finalPasswordInput.value;
            finalPasswordCheck(finalPassword);
        }
    });
} else {
    console.warn("Element #final_password not found");
}

// Game code input
if (dnaInput) {
    dnaInput.addEventListener('keypress', checkGameCode);
} else {
    console.warn("Element #dna_code not found");
}

// ===== INITIALIZATION =====
updateBidder();
