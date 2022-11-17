class Vorrang {
    constructor (relationen) {
        this._relationen = relationen;
        this._tasks = new Set();
        relationen.flat().forEach(element => {
            this._tasks.add(element);
        });
        console.log(Object.values(this._tasks));
    }
    next() {
        // Berechne nächsten Task
        // Lösche Task aus _tasks
        // Gebe Task zurück
    }
    [Symbol.iterator]() {
        const that = this;
        return{
            next() {
                return {
                    value: that.next(),
                    done: that._tasks.size === 0
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