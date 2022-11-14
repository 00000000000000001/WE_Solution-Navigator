// Kellerautomat

var A = {
    // Q : ["q0", "q1"/*, "q2" */], // Zustände
    Sigma : ['(', ')', '[', ']', '{', '}'], // Alphabet
    // Gamma : ['A', 'B', 'C', '#'], // Kelleralphabet
    // delta nimmt einen Zustand q und einen Buchstaben s entgegen
    delta : function(s) {

        // Guard: Funktion verlassen, wenn Buchstabe s nicht im Alphabet Sigma enthalten ist
       if (!this.Sigma.includes(s)) {
            return;
       }

       let top = this.stack.pop();

        if ( (this.q === "q0") && (s === '(') && (top === '#')) {
            this.stack.push('#');
            this.stack.push('A');
        }
        if ( (this.q === "q0") && (s === '(') && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('A');
        }
        if ( (this.q === "q0") && (s === ')') && (top === 'A')) {
            this.q = "q1";
        }
        if ( (this.q === "q1") && (s === ')') && (top === 'A')) {
            this.q = "q1";
        }
        if ( (this.q === "q1") && (s === '(') && (top === '#')) {
            this.stack.push('#');
            this.stack.push('A');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === '(') && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('A');
            this.q = "q0";
        }
    },
    // q0 : "q0",
    // Z : '#',
    // F : "q2",
    // Gedächtnis
    stack : ['#'],
    w : [],
    q : "q0",
    // Eval nimmt ein Wort "w" entgegen
    eval : function (w) {
        this.w = [...w]; // String in Character-Array umwandeln mittel Spread-Operator
        // console.log(this.w);
        while (this.w.length > 0) {
            this.delta(this.w.shift());
        }
        // der Kellerautomat akzeptiert, wenn der Stack nach Abarbeitung des Wortes w leer ist
        if (this.stack.length === 1 && this.stack[0] === '#') {
            return true;
        } else {
            this.stack = ['#']; // Stack wieder zurücksetzen
            return false;
        }
    }
}

function eval() {
    // 1. Ausdruck auslesen
    const eingabe = document.getElementById("eingabe");
    const w = eingabe.textContent; // Wort w

    // 2. Ausdruck als Wort w an Automaten A weitergeben
    const a = Object.create(A);
    const valid = A.eval(w);

    // 3. Eingabe je nach Rückgabewert von A.eval(w) einfärben: true=grün, false=rot
    if(valid) {
        // färbe gründ
        eingabe.style = "background-color: rgb(152, 251, 152)";
    } else {
        // färbe rot
        eingabe.style = "background-color: rgb(240, 128, 128)";
    }
}