document.addEventListener("DOMContentLoaded", function() {
    const dnaInput = document.getElementById("dna_code");
    
    dnaInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let dnaCodeString = dnaInput.value;
            console.log(dnaCodeString);
        }
    });
});