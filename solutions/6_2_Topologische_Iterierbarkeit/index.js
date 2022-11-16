class Vorrang {
    // Konstruktor nimmer Vorrangrelationen entgegen
    constructor (relationen) {
        // for (const r of relationen){
        //     console.log(r);
        // }
        this._relationen = relationen;
    }
    [Symbol.iterator]() {
        const that = this;
        const props = this._relationen;
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
  ] )