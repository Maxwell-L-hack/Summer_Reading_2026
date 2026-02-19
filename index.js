const dnaInput = document.getElementById("dna_code");
let dnaCodeString;

dnaInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        dnaCodeString = dnaInput.value;
        handleDnaCode(dnaCodeString);
    }
});

function handleDnaCode(code) {
    console.log(code);
    // Do whatever you need with the dna code here
}