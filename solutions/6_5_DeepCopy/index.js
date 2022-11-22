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