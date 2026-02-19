const dnaInput = document.getElementById("dna_code");
let dnaCodeString;

dnaInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let dnaCodeString = dnaInput.value;
    }
});

console.log(dnaCodeString);