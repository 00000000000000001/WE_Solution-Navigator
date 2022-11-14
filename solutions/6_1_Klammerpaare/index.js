// Kellerautomat

var A = {
    Q : ["q0", "q1", "q2"],
    Sigma : ['(', ')', '[', ']', '{', '}'],
    Gamma : ['A', 'B', 'C', '#'],
    delta : function() {
        // TODO: Übergangsfunktion implementieren
        // TODO: delta als Generator implementieren um Zustände zu merken
    },
    q0 : "q0",
    Z : '#',
    F : "q2",
    // Gedächtnis
    q : "",
    // Eval nimmt ein Wort "w" entgegen
    eval : function (w) {
        for (const buchstabe of w) {
            console.log(buchstabe);
        }
        return false;
    }
}

const stack = ['#'];

function eval() {
    // 1. Ausdruck auslesen
    const eingabe = document.getElementById("eingabe");
    const w = eingabe.textContent; // Wort w

    // 2. Ausdruck als Wort w an Automaten A weitergeben
    const a = Object.create(A);
    const valid = A.eval(w);
    // const valid = foo(w);

    // 3. Eingabe je nach Rückgabewert von A.eval(w) einfärben: true=grün, false=rot
    if(valid) {
        // färbe gründ
        eingabe.style = "background-color: rgb(152, 251, 152)";
    } else {
        // färbe rot
        eingabe.style = "background-color: rgb(240, 128, 128)";
    }
}