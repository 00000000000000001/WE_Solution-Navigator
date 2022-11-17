class Vorrang {
    constructor (relationen) {
        this._relationen = relationen;
        this._tasks = new Set();
        relationen.flat().forEach(element => {
            this._tasks.add(element);
        });
        this._tasks.add(""); // "" erleichtert die iterierbarkeit der Klasse
    }
    next() {
        // Berechne nächsten Task
        const task = Array.from(this._tasks)[0];
        // Lösche Task aus _tasks
        this._tasks.delete(task);
        // Gebe Task zurück
        return task;
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
