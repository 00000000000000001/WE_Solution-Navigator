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

       // für '(' und ')'
        if ( (this.q === "q0") && (s === this.Sigma[0]) && (top === '#')) {
            this.stack.push('#');
            this.stack.push('A');
        }
        if ( (this.q === "q0") && (s === this.Sigma[0]) && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('A');
        }
        if ( (this.q === "q0") && (s === this.Sigma[0]) && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('A');
        }
        if ( (this.q === "q0") && (s === this.Sigma[0]) && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('A');
        }
        if ( (this.q === "q0") && (s === this.Sigma[1]) && (top === 'A')) {
            this.q = "q1";
        }
        if ( (this.q === "q1") && (s === this.Sigma[1]) && (top === 'A')) {
            this.q = "q1";
        }
        if ( (this.q === "q1") && (s === this.Sigma[0]) && (top === '#')) {
            this.stack.push('#');
            this.stack.push('A');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === this.Sigma[0]) && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('A');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === this.Sigma[0]) && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('A');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === this.Sigma[0]) && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('A');
            this.q = "q0";
        }

        // für '[' und ']'
        if ( (this.q === "q0") && (s === '[') && (top === '#')) {
            this.stack.push('#');
            this.stack.push('B');
        }
        if ( (this.q === "q0") && (s === '[') && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('B');
        }
        if ( (this.q === "q0") && (s === '[') && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('B');
        }
        if ( (this.q === "q0") && (s === '[') && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('B');
        }
        if ( (this.q === "q0") && (s === ']') && (top === 'B')) {
            this.q = "q1";
        }
        if ( (this.q === "q1") && (s === ']') && (top === 'B')) {
            this.q = "q1";
        }
        if ( (this.q === "q1") && (s === '[') && (top === '#')) {
            this.stack.push('#');
            this.stack.push('B');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === '[') && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('B');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === '[') && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('B');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === '[') && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('B');
            this.q = "q0";
        }

        // für '{' und '}'
        if ( (this.q === "q0") && (s === '{') && (top === '#')) {
            this.stack.push('#');
            this.stack.push('C');
        }
        if ( (this.q === "q0") && (s === '{') && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('C');
        }
        if ( (this.q === "q0") && (s === '{') && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('C');
        }
        if ( (this.q === "q0") && (s === '{') && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('C');
        }
        if ( (this.q === "q0") && (s === '}') && (top === 'C')) {
            this.q = "q1";
        }
        if ( (this.q === "q1") && (s === '}') && (top === 'C')) {
            this.q = "q1";
        }
        if ( (this.q === "q1") && (s === '{') && (top === '#')) {
            this.stack.push('#');
            this.stack.push('C');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === '{') && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('C');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === '{') && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('C');
            this.q = "q0";
        }
        if ( (this.q === "q1") && (s === '{') && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('C');
            this.q = "q0";
        }

        // console.log("s: " + s);
        // console.log("q: " + this.q);
        // console.log(this.stack);
    },
    // q0 : "q0",
    // Z : '#',
    // F : "q2",
    // Gedächtnis
    stack : ['#'],
    w : [],
    q : "q0",
    // Eval nimmt ein Wort "w" entgegen
    akzeptor : function (w) {
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
    const valid = A.akzeptor(w);

    // 3. Eingabe je nach Rückgabewert von A.eval(w) einfärben: true=grün, false=rot
    if(valid) {
        // färbe grün
        eingabe.style = "background-color: ";
    } else {
        // färbe rot
        eingabe.style = "background-color: rgb(240, 128, 128)";
    }
}

alert("TODO: Tests schreiben (assertions)");