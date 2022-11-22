function deepCopy( struct ){
    // kond. tern. Operator: condition ? exprIfTrue : exprIfFalse
    // Array.map()
    /*
        const array1 = [1, 4, 9, 16];

        // pass a function to map
        const map1 = array1.map(x => x * 2);

        console.log(map1);
        // expected output: Array [2, 8, 18, 32]
    */
   // Objects.fromEntries(): transforms a list of key-value pairs into an object
   /*
        const entries = new Map([
        ['foo', 'bar'],
        ['baz', 42]
        ]);

        const obj = Object.fromEntries(entries);

        console.log(obj);
        // expected output: Object { foo: "bar", baz: 42 }
   */
  // Object.entries()
  /*
        const object1 = {
        a: 'somestring',
        b: 42
        };

        for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
        }

        // expected output:
        // "a: somestring"
        // "b: 42"
  */
 return {};
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