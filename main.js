const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    limpaTela();
    e.preventDefault();

    let A = document.getElementById("i1").value;
    let B = document.getElementById("i2").value;


    switch (retornaInteger(A,  B)) {
        case 0:
            return respostaYep();
        case 1:
            return respostaNope();
        case 2:
            return respostaEquals();
    }
})

function retornaInteger(A, B) {

    if (B > A) {
        return 0;
    }

    if (A > B) {
        return 1;
    }

    if (A === B) {
        return 2;
    }
}

function respostaYep() {
    document.getElementById("yep").style.display = "flex";
}

function respostaNope() {
    document.getElementById("nop").style.display = "flex";
}

function respostaEquals() {
    document.getElementById("equals").style.display = "flex";
}

function limpaTela() {
    document.getElementById("yep").style.display = "none";
    document.getElementById("nop").style.display = "none";
    document.getElementById("equals").style.display = "none";
}