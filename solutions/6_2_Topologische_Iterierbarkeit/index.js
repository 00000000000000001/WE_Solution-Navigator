class Vorrang {
    constructor (relationen) {
        this._relationen = relationen;
        this._tasks = new Set();
        relationen.flat().forEach(element => {
            this._tasks.add(element);
        });
        console.log(Object.values(this._tasks));
    }
    [Symbol.iterator]() {
        const that = this;
        let i = 0;
        return{
            next() {
                return {
                    value: Array.from(that._tasks)[i++],
                    done: i > that._tasks.size
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
    console.log(next );
}