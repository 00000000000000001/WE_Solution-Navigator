class Vorrang {
    constructor (relationen) {
        this._relationen = relationen;
        this._tasks = new Set(relationen.flat());
        // this._tasks.add(""); // "" erleichtert die iterierbarkeit der Klasse
        this._sorted = new Set();
        this._iterator = this._tasks.values();
    }
    dep(task) {
        const res = new Set();
        for (const regel of this._relationen){
            if (regel[1] === task){
                res.add(regel[0]);
            }
        }
        return res;
    }
    isSuperset(set, subset) {
        for (const elem of subset) {
            if (!set.has(elem)) {
                return false;
            }
        }
        return true;
    }
    next() {
        if (this._tasks.size === 0){
            return;
        }
        
        
        let task = this._iterator.next().value;
        let dep = this.dep(task);
        if (dep.size === 0 || this.isSuperset(this._sorted, dep)){
            this._sorted.add(task);
            this._tasks.delete(task);
        }else{
            this.next();
        }

        return task;
    }
    [Symbol.iterator]() {
        const that = this;
        return{
            next() {
                return {
                    value: that.next(),
                    done: value === undefined
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

// for ( const next of studentenLeben ) {
//     console.log(next );
// }

console.assert(studentenLeben._relationen.length === 3);
console.assert(Array.from(studentenLeben._tasks)[0] === "schlafen");
console.assert(Array.from(studentenLeben._tasks)[1] === "studieren");
console.assert(Array.from(studentenLeben._tasks)[2] === "essen");
console.assert(Array.from(studentenLeben._tasks)[3] === "prüfen");
console.assert(studentenLeben._tasks.size === 4);
console.assert(studentenLeben.dep("schlafen").size === 0);
console.assert(Array.from(studentenLeben.dep("studieren"))[0] === "schlafen");
console.assert(Array.from(studentenLeben.dep("studieren"))[1] === "essen");
console.assert(studentenLeben.dep("studieren").size === 2);
console.assert(studentenLeben.dep("essen").size === 0);
console.assert(Array.from(studentenLeben.dep("prüfen"))[0] === "studieren");
console.assert(studentenLeben.dep("prüfen").size === 1);
console.assert(studentenLeben.isSuperset(studentenLeben._tasks, new Set(["schlafen"])));
console.assert(!studentenLeben.isSuperset(studentenLeben._tasks, new Set(["Haus"])));