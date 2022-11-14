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
        console.log(w); // Test-Ausgabe
    }
}

const stack = [];

function eval() {
    console.log("Hallo Welt!"); // Test-Ausgabe
    // 1. Ausdruck auslesen
    // 2. Ausdruck als Wort w an Automaten A weitergeben
    // 3. Eingabe je nach Rückgabewert von A.eval(w) einfärben: true=grün, false=rot
}