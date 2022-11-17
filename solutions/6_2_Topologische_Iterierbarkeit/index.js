class Vorrang {
    constructor (relationen) {
        this._relationen = relationen;
        this._tasks = new Set(relationen.flat());
        this._tasks.add(""); // "" erleichtert die iterierbarkeit der Klasse
        // this.collect(relationen);
    }
    next() {
        // Berechne nächsten Task
        const iterator = this._tasks.values();
        const task = iterator.next().value;
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
