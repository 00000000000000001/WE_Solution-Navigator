// Kellerautomat

var A = {
    Sigma : ['(', ')', '[', ']', '{', '}'], // Alphabet
    // Akzeptor nimmt ein Wort "w" entgegen und prüft es auf Gültigkeit
    Akzeptor : function (w) {

        w += '€';
        const stack = ['#'];
        const zustand = 0;

        
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
console.assert(a.Akzeptor("(())") === true);
console.assert(a.Akzeptor("()()") === true);

console.assert(a.Akzeptor("(") === false);
console.assert(a.Akzeptor("(()") === false);
console.assert(a.Akzeptor("()(") === false);

console.assert(a.Akzeptor(")") === false);
console.assert(a.Akzeptor("())") === false);
console.assert(a.Akzeptor(")()") === false);

console.assert(a.Akzeptor("))") === false);
console.assert(a.Akzeptor("((") === false);

// console.assert(a.Akzeptor("()") === true);
// console.assert(a.Akzeptor("[]") === true);
// console.assert(a.Akzeptor("{}") === true);

// console.assert(a.Akzeptor("(())") === true);
// console.assert(a.Akzeptor("[[]]") === true);
// console.assert(a.Akzeptor("{{}}") === true);

// console.assert(a.Akzeptor("([])") === true);
// console.assert(a.Akzeptor("[{}]") === true);
// console.assert(a.Akzeptor("{()}") === true);

// console.assert(a.Akzeptor("({})") === true);
// console.assert(a.Akzeptor("[()]") === true);
// console.assert(a.Akzeptor("{[]}") === true);

// console.assert(a.Akzeptor("()()") === true);
// console.assert(a.Akzeptor("[][]") === true);
// console.assert(a.Akzeptor("{}{}") === true);

// console.assert(a.Akzeptor("()[]") === true);
// console.assert(a.Akzeptor("[]{}") === true);
// console.assert(a.Akzeptor("{}()") === true);

// console.assert(a.Akzeptor("(){}") === true);
// console.assert(a.Akzeptor("[]()") === true);
// console.assert(a.Akzeptor("{}[]") === true);

// console.assert(a.Akzeptor("[()()]") === true);
// console.assert(a.Akzeptor("{[][]}") === true);
// console.assert(a.Akzeptor("({}{})") === true);

// console.assert(a.Akzeptor("{()[]}") === true);
// console.assert(a.Akzeptor("([]{})") === true);
// console.assert(a.Akzeptor("[{}()]") === true);

// console.assert(a.Akzeptor("(") === false);
// console.assert(a.Akzeptor("[") === false);
// console.assert(a.Akzeptor("{") === false);

// console.assert(a.Akzeptor(")") === false);
// console.assert(a.Akzeptor("]") === false);
// console.assert(a.Akzeptor("}") === false);

// console.assert(a.Akzeptor("()(") === false);
// console.assert(a.Akzeptor("[][") === false);
// console.assert(a.Akzeptor("{}{") === false);

// console.assert(a.Akzeptor("())") === false);
// console.assert(a.Akzeptor("[]]") === false);
// console.assert(a.Akzeptor("{}}") === false);

// console.assert(a.Akzeptor("(()") === false);
// console.assert(a.Akzeptor("[[]") === false);
// console.assert(a.Akzeptor("{{}") === false);

// console.assert(a.Akzeptor(")()") === false);
// console.assert(a.Akzeptor("][]") === false);
// console.assert(a.Akzeptor("}{}") === false);

// console.assert(a.Akzeptor("(]") === false);
// console.assert(a.Akzeptor("[}") === false);
// console.assert(a.Akzeptor("{)") === false);

// console.assert(a.Akzeptor("(}") === false);
// console.assert(a.Akzeptor("[)") === false);
// console.assert(a.Akzeptor("{]") === false);

// console.assert(a.Akzeptor("[(][)]") === false);
// console.assert(a.Akzeptor("{(}{)}") === false);
// console.assert(a.Akzeptor("([)(])") === false);

// console.assert(a.Akzeptor("{[}{]}") === false);
// console.assert(a.Akzeptor("({)(})") === false);
// console.assert(a.Akzeptor("[{][}]") === false);

// console.assert(a.Akzeptor("(])") === false);
// console.assert(a.Akzeptor("(})") === false);

// console.assert(a.Akzeptor("[)]") === false);
// console.assert(a.Akzeptor("[}]") === false);

// console.assert(a.Akzeptor("{)}") === false);
// console.assert(a.Akzeptor("{]}") === false);

// console.assert(a.Akzeptor("([)") === false);
// console.assert(a.Akzeptor("({)") === false);

// console.assert(a.Akzeptor("[(]") === false);
// console.assert(a.Akzeptor("[{]") === false);

// console.assert(a.Akzeptor("{(}") === false);
// console.assert(a.Akzeptor("{[}") === false);

alert("s. Programmierbeispiel https://sibiwiki.de/wiki/index.php?title=Kellerautomat\n PDA-Simulator: https://automatonsimulator.com/");