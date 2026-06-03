const number = document.querySelector('#text_box');
const numberToCheck = "0000:00FF";

function checkCode(event) {
	if (event.key === "Enter") {
		let numberValue = number.value;
		if (numberValue.includes(numberToCheck)) {
			message = "That is the correct code!"
			console.log("Correct code entered");
			input.removeEventListener('keypress', checkCode);
			// put code needing to be called here
		} else {
			message = "That is not the correct code";
		}
	}
};

input.addEventListener('keypress', checkCode);

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
        default:
            if (money >= 12000) {
                bidder.textContent = "There are no bidders.  Lower the price.";
            }
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

const input = document.querySelector('#text_field');
const answerToCheck = "MacOS9.1.26";

function checkCode(event) {
	if (event.key === "Enter") {
		let inputValue = input.value;
		if (inputValue.includes(answerToCheck)) {
			message = "That is the correct code!"
			console.log("Correct code entered");
			input.removeEventListener('keypress', checkCode);
			// put code needing to be called here
		} else {
			message = "That is not the correct code";
		}
	}
};

input.addEventListener('keypress', checkCode);

function changeToDesktop() {
	document.getElementById('login').style.display = 'none';
	document.getElementById('desktop').style.display = 'flex';
	location.hash = 'congratulations_dialog';
}

const finalPasswordInput = document.getElementById("final_password");
let finalPassword;

finalPasswordInput.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		finalPassword = finalPasswordInput.value;
		finalPasswordCheck(finalPassword);
	} else if ("1" === "1") {
		// add in login button password check
	}
});


function loginButtonCheck() {

	finalPassword = finalPasswordInput.value;
	finalPasswordCheck(finalPassword);
}

function finalPasswordCheck(finalPasswordString) {
	console.log(finalPasswordString)
	if (finalPasswordString === "secret code") {
		changeToDesktop();
	}
}

const dnaInput = document.getElementById("dna_code");
const dnA1 = "Noj txhua yam";
const dnA2 = "Kai vao";
const dnA3 = "Kjotteter";

function checkCode(event) {
    if (event.key === "Enter") {
        dnaCodeString = dnaInput.value;
        if (dnaCodeString.includes(dnA1)) { 
            dnaInput.removeEventListener('keypress', checkCode);
            window.location.href = 'dna0/dna.html';
        } else {
            if (dnaCodeString.includes(dnA2)) {
                dnaInput.removeEventListener('keypress', checkCode);
                window.location.href = 'dna1/dna.html';
            } else { 
                if (dnaCodeString.includes(dnA3)) { 
                    dnaInput.removeEventListener('keypress', checkCode);
                window.location.href = 'dna2/dna.html';
                }
            }
            //handleDnaCode(dnaCodeString);
        }
    }
};

dnaInput.addEventListener('keypress', checkCode);

export class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListner('keydown', e => {
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter'
            ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
        }
        console.log(e.key);
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter') {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
            console.log(e.key, this.keys);
        });
    }
}

