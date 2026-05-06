const input = document.querySelector('input');

function checkAnswer(){
	let answerToCheck = "9.1.26";
	let answerInput = document.getElementById("code");
}
function checkCode(event) {
	if (event.key === "Enter") {
		let input = answerInput.value;
		if (input.includes(answerToCheck)) {
			message = "That is the correct code!"
			if (checkCode) {
				answerInput.removeEventListener('keypress', checkCode);
			}
			// put code needing to be called here
		} else {
			message = "That is not the correct code";
		}
	}
};