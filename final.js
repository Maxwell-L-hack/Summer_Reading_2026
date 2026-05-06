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

function finalPasswordCheck(finalPasswordString) {
	console.log(finalPasswordString)
	if (finalPasswordString === "secret code") {
		changeToDesktop();
	}
}