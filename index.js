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
    if (code === "Kjotteter") {
        loadDna("Carnivore")
    }
    else if (code === "Kai vao") {
        loadDna("Herbivore")
    }
    else if (code === "Noj txhua yam") {
        loadDna("Omnivore")
    }
}
