// Kellerautomat

var A = {
    Q : ["q0", "q1", "q2"],
    Sigma : ['(', ')', '[', ']', '{', '}'],
    Gamma : ['A', 'B', 'C', '#'],
    delta : function() {
        // TODO: Übergangsfunktion implementieren
    },
    q0 : "q0",
    Z : '#',
    F : "q2",
}

const stack = [];

function eval() {
    console.log("Hallo Welt!");
}