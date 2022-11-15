// Kellerautomat

var A = {
    Sigma : ['(', ')', '[', ']', '{', '}'], // Alphabet
    // delta nimmt einen Buchstaben s entgegen und führt Zustandsübergänge durch
    delta : function(s) {

        // Guard: Funktion verlassen, wenn Buchstabe s nicht im Alphabet Sigma enthalten ist
        if (!this.Sigma.includes(s)) {
            return;
        }

        let top = this.stack.pop();

        if ((this.q === "q0") && (s === this.Sigma[0]) && (top === '#')) {
            this.stack.push('#');
            this.stack.push('A');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[2]) && (top === '#')) {
            this.stack.push('#');
            this.stack.push('B');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[4]) && (top === '#')) {
            this.stack.push('#');
            this.stack.push('C');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[0]) && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('A');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[0]) && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('A');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[0]) && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('A');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[2]) && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('B');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[2]) && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('B');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[2]) && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('B');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[4]) && (top === 'A')) {
            this.stack.push('A');
            this.stack.push('C');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[4]) && (top === 'B')) {
            this.stack.push('B');
            this.stack.push('C');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[4]) && (top === 'C')) {
            this.stack.push('C');
            this.stack.push('C');
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[1]) && (top === 'A')) {
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[3]) && (top === 'B')) {
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[5]) && (top === 'C')) {
            return;
        }
        // qtot
        if ((this.q === "q0") && (s === this.Sigma[1]) && (top === '#')) {
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[3]) && (top === '#')) {
            return;
        }
        if ((this.q === "q0") && (s === this.Sigma[5]) && (top === '#')) {
            return;
        }

        this.stack.push(top); // Symbol wieder zurücklegen, wenn keine geeignete Übergangsfunktion existiert
    },
    // Gedächtnis
    stack : ['#'],
    w : [],
    q : "q0",
    // Akzeptor nimmt ein Wort "w" entgegen und prüft es auf Gültigkeit
    Akzeptor : function (w) {
        this.w = [...w]; // String in Character-Array umwandeln mittels Spread-Operator
        while (this.w.length > 0) {
            this.delta(this.w.shift());
        }
        // der Kellerautomat akzeptiert, wenn der Stack nach Abarbeitung des Wortes w einzig das Kellersymbol beinhaltet
        if (this.stack.length === 1 && this.stack[0] === '#') {
            return true;
        } else {
            this.stack = ['#']; // Stack wieder zurücksetzen
            return false;
        }
    },
    toString: function() {
        const q = "q: " + this.q;
        const w = "w: " + this.w;
        const stack = "stack: " + this.stack;
        return q + '\n' + w + '\n' + stack;
    }
}

function eval() {
    // 1. Ausdruck auslesen
    const eingabe = document.getElementById("eingabe");
    const w = eingabe.textContent; // Wort w

    // 2. Ausdruck als Wort w an Automaten A weitergeben
    const valid = a.Akzeptor(w);

    // 3. Eingabe je nach Rückgabewert von A.eval(w) einfärben: true=grün, false=rot
    if(valid) {
        // färbe neutral
        eingabe.style = "background-color: ";
    } else {
        // färbe rot
        eingabe.style = "background-color: rgb(240, 128, 128)";
    }
}

function setAlphabet() {
    const input0 = document.getElementById("input0");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");
    const input5 = document.getElementById("input5");

    const a1 = input0.value;
    const a2 = input1.value;
    const b1 = input2.value;
    const b2 = input3.value;
    const c1 = input4.value;
    const c2 = input5.value;

    const alphabet = [a1, a2, b1, b2, c1, c2];
    a.Sigma = alphabet;
    eval();
}

const a = Object.create(A);

console.assert(a.Akzeptor("()") === true);
console.assert(a.Akzeptor("[]") === true);
console.assert(a.Akzeptor("{}") === true);

console.assert(a.Akzeptor("(())") === true);
console.assert(a.Akzeptor("[[]]") === true);
console.assert(a.Akzeptor("{{}}") === true);

console.assert(a.Akzeptor("([])") === true);
console.assert(a.Akzeptor("[{}]") === true);
console.assert(a.Akzeptor("{()}") === true);

console.assert(a.Akzeptor("({})") === true);
console.assert(a.Akzeptor("[()]") === true);
console.assert(a.Akzeptor("{[]}") === true);

console.assert(a.Akzeptor("()()") === true);
console.assert(a.Akzeptor("[][]") === true);
console.assert(a.Akzeptor("{}{}") === true);

console.assert(a.Akzeptor("()[]") === true);
console.assert(a.Akzeptor("[]{}") === true);
console.assert(a.Akzeptor("{}()") === true);

console.assert(a.Akzeptor("(){}") === true);
console.assert(a.Akzeptor("[]()") === true);
console.assert(a.Akzeptor("{}[]") === true);

console.assert(a.Akzeptor("[()()]") === true);
console.assert(a.Akzeptor("{[][]}") === true);
console.assert(a.Akzeptor("({}{})") === true);

console.assert(a.Akzeptor("{()[]}") === true);
console.assert(a.Akzeptor("([]{})") === true);
console.assert(a.Akzeptor("[{}()]") === true);

console.assert(a.Akzeptor("(") === false);
console.assert(a.Akzeptor("[") === false);
console.assert(a.Akzeptor("{") === false);

console.assert(a.Akzeptor(")") === false);
console.assert(a.Akzeptor("]") === false);
console.assert(a.Akzeptor("}") === false);

console.assert(a.Akzeptor("()(") === false);
console.assert(a.Akzeptor("[][") === false);
console.assert(a.Akzeptor("{}{") === false);

console.assert(a.Akzeptor("())") === false);
console.assert(a.Akzeptor("[]]") === false);
console.assert(a.Akzeptor("{}}") === false);

console.assert(a.Akzeptor("(()") === false);
console.assert(a.Akzeptor("[[]") === false);
console.assert(a.Akzeptor("{{}") === false);

console.assert(a.Akzeptor(")()") === false);
console.assert(a.Akzeptor("][]") === false);
console.assert(a.Akzeptor("}{}") === false);

console.assert(a.Akzeptor("(]") === false);
console.assert(a.Akzeptor("[}") === false);
console.assert(a.Akzeptor("{)") === false);

console.assert(a.Akzeptor("(}") === false);
console.assert(a.Akzeptor("[)") === false);
console.assert(a.Akzeptor("{]") === false);

console.assert(a.Akzeptor("[(][)]") === false);
console.assert(a.Akzeptor("{(}{)}") === false);
console.assert(a.Akzeptor("([)(])") === false);

console.assert(a.Akzeptor("{[}{]}") === false);
console.assert(a.Akzeptor("({)(})") === false);
console.assert(a.Akzeptor("[{][}]") === false);