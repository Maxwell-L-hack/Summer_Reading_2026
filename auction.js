const input = document.querySelector('#text_field');
const answerToCheck = "0000:00FF";

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