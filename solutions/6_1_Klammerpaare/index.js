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
    // Eval nimmt ein Wort "w" entgegen
    eval : function(w) {
        console.log("log from A: " + w); // Test-Ausgabe
        return false;
    }
}

const stack = [];

function eval() {
    // 1. Ausdruck auslesen
    const eingabe = document.getElementById("eingabe");
    const w = eingabe.textContent; // Wort w
    // 2. Ausdruck als Wort w an Automaten A weitergeben
    const a = Object.create(A);
    var res = A.eval(w)
    // 3. Eingabe je nach Rückgabewert von A.eval(w) einfärben: true=grün, false=rot
    console.log(res);
}