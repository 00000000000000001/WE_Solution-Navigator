// Kellerautomat

var A = {
    Sigma : ['(', ')', '[', ']', '{', '}'], // Alphabet
    // Akzeptor nimmt ein Wort "w" entgegen und prüft es auf Gültigkeit
    Akzeptor : function (w) {

        w += '€';
        const stack = ['#'];
        stack.top = function() {
            return this[stack.length - 1];
        }
        let zustand = 0;

        for (const c of w) {
            // Guard lässt nur Zeichen durch, die im Alphabet enthalten sind
            if (!this.Sigma.includes(c) && c !== '€' ) {
                continue;
            }
            const top = stack.top();
            if (zustand === 0) {
                if (c === this.Sigma[0] && top === '#') {
                    zustand = 0;
                    stack.push('A');
                } else if (c === this.Sigma[0] && top === 'A') {
                    zustand = 0;
                    stack.push('A');
                } else if (c === this.Sigma[0] && top === 'B') {
                    zustand = 0;
                    stack.push('A');
                } else if (c === this.Sigma[0] && top === 'C') {
                    zustand = 0;
                    stack.push('A');
                } else if (c === this.Sigma[2] && top === '#') {
                    zustand = 0;
                    stack.push('B');
                } else if (c === this.Sigma[2] && top === 'A') {
                    zustand = 0;
                    stack.push('B');
                } else if (c === this.Sigma[2] && top === 'B') {
                    zustand = 0;
                    stack.push('B');
                } else if (c === this.Sigma[2] && top === 'C') {
                    zustand = 0;
                    stack.push('B');
                } else if (c === this.Sigma[4] && top === '#') {
                    zustand = 0;
                    stack.push('C');
                } else if (c === this.Sigma[4] && top === 'A') {
                    zustand = 0;
                    stack.push('C');
                } else if (c === this.Sigma[4] && top === 'B') {
                    zustand = 0;
                    stack.push('C');
                } else if (c === this.Sigma[4] && top === 'C') {
                    zustand = 0;
                    stack.push('C');
                } else if (c === this.Sigma[1] && top === 'A') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[3] && top === 'B') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[5] && top === 'C') {
                    zustand = 1;
                    stack.pop();
                } else {
                    return false;
                }
                continue;
            } else if (zustand === 1) {
                if (c === this.Sigma[1] && top === 'A') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[1] && top === 'B') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[1] && top === 'C') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[3] && top === 'A') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[3] && top === 'B') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[3] && top === 'C') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[5] && top === 'A') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[5] && top === 'B') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[5] && top === 'C') {
                    zustand = 1;
                    stack.pop();
                } else if (c === this.Sigma[0] && top === '#') {
                    zustand = 0;
                    stack.push('A');
                } else if (c === this.Sigma[0] && top === 'A') {
                    zustand = 0;
                    stack.push('A');
                } else if (c === this.Sigma[0] && top === 'B') {
                    zustand = 0;
                    stack.push('A');
                } else if (c === this.Sigma[0] && top === 'C') {
                    zustand = 0;
                    stack.push('A');
                } else if (c === this.Sigma[2] && top === '#') {
                    zustand = 0;
                    stack.push('B');
                } else if (c === this.Sigma[2] && top === 'A') {
                    zustand = 0;
                    stack.push('B');
                } else if (c === this.Sigma[2] && top === 'B') {
                    zustand = 0;
                    stack.push('B');
                } else if (c === this.Sigma[2] && top === 'C') {
                    zustand = 0;
                    stack.push('B');
                } else if (c === this.Sigma[4] && top === '#') {
                    zustand = 0;
                    stack.push('C')
                } else if (c === this.Sigma[4] && top === 'A') {
                    zustand = 0;
                    stack.push('C');
                } else if (c === this.Sigma[4] && top === 'B') {
                    zustand = 0;
                    stack.push('C');
                } else if (c === this.Sigma[4] && top === 'C') {
                    zustand = 0;
                    stack.push('C');
                } else if (c === '€' && top === '#') {
                    zustand = 2;
                } else {
                    return false;
                }
                continue;
            } else {
                console.error("Im Zustand 2 darf es kein Zeichen mehr geben!!");
                return false;
            }
        }
        return (zustand === 2);
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

    // 2. Ausdruck als Wort w an Automaten A weitergeben und
    // 3. die Eingabe je nach Rückgabewert von einfärbt: true=grün, false=rot
    if(w === "" || a.Akzeptor(w)) {
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

console.assert(a.Akzeptor("(])") === false);
console.assert(a.Akzeptor("(})") === false);

console.assert(a.Akzeptor("[)]") === false);
console.assert(a.Akzeptor("[}]") === false);

console.assert(a.Akzeptor("{)}") === false);
console.assert(a.Akzeptor("{]}") === false);

console.assert(a.Akzeptor("([)") === false);
console.assert(a.Akzeptor("({)") === false);

console.assert(a.Akzeptor("[(]") === false);
console.assert(a.Akzeptor("[{]") === false);

console.assert(a.Akzeptor("{(}") === false);
console.assert(a.Akzeptor("{[}") === false);