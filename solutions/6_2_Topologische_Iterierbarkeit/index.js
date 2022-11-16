class Vorrang {
    // Konstruktor nimmer Vorrangrelationen entgegen
    constructor (relationen) {
        this._relationen = relationen;
    }
    [Symbol.iterator]() {
        const that = this._relationen;
        const props = Object.keys(this._relationen);
        let i = 0;
        return {
            next() {
                return {
                    value: that[props[i++]],
                    done: i > props.length
                }
            }
        }
    }
}

const studentenLeben = new Vorrang( [
    [ "schlafen", "studieren" ],
    [ "essen", "studieren" ],
    [ "studieren", "prüfen" ]
  ] );

for ( const next of studentenLeben ) {
    console.log( next );
}