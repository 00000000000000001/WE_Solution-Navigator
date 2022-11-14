// Kellerautomat

var A = {
    // Q : ["q0", "q1"],
    // Sigma : ['(', ')', '[', ']', '{', '}'],
    // Gamma : ['A', 'B', 'C', '#'],
    // delta nimmt einen Zustand q und einen Buchstaben s entgegen
    delta : function(s) {
        // TODO: Übergangsfunktion implementieren
        /* 
            Wenn in q0 ein '(' gelesen wird und aus dem Stack ein '#' gelesen wird,
            dann: push('#') und push('A').
        */  
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
    eval : function (w) {
        this.w = [...w]; // String in Character-Array umwandeln mittel Spread-Operator
        // console.log(this.w);
        while (this.w.length > 0) {
            this.delta(this.w.shift());
        }
        if (this.stack.length === 1 && this.stack[0] === '#') {
            return true;
        } else {
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