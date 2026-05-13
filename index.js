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