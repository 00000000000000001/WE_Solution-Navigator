/*
6.5. DeepCopy

Schreiben Sie eine rekursive Funktion deepCopy( struct ) als ES6-Ausdruck, sodass beliebig geschachtelte Arrays und Objekte tiefenkopiert werden können.

Verwenden Sie zu diesem Zweck:

    konditionalen ternären Operator
    Array.map()
    Object.fromEntries()
    Object.entries()

Verwenden Sie dabei nur Arrow-Funktionen und Ausdrücke, keine Anweisungen, keine Blöcke und keine JSON-Methoden. Nutzen Sie für Ihre Tests console.assert. 
*/

function deepCopy( struct ){
    return Object.fromEntries(Object.entries(struct));
}

const struct = {
    a: "Hallo",
    b: {
        a: "Moin",
        b: 3,
    },
    c: 999,
};

const copy = deepCopy( struct );


console.assert(copy.a === struct.a);
console.assert(copy.b.a === struct.b.a);
console.assert(copy.b.b === struct.b.b);
console.assert(copy.c === struct.c);
console.assert(copy !== struct);
console.assert(copy.b !== struct.b);
// Wenn die Props in einem Objekt geändert werden,
// dann ändern sich die im anderen Objekt nicht

copy.a = "Hose";
copy.b.a = "Knopf";
copy.b.b = 9;
copy.c = 0;

console.assert(copy.a !== struct.a);
console.assert(copy.b.a !== struct.b.a);
console.assert(copy.b.b !== struct.b.b);
console.assert(copy.c !== struct.c);


alert(`Die Aufgabe muss nochmal neu bearbeitet werden. 
Die Lösung entspricht nicht den Anforderungen wie Sie in der Aufgabe gestellt wurden (Rekursion).`);