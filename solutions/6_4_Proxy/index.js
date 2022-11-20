class Vorrang {
    constructor (relationen) {
        this._relationen = relationen;
        this._tasks = new Set(relationen.flat());
        this._sorted = new Set();
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
        for(const task of this._tasks){
            let dep = this.dep(task);
            if (dep.size === 0 || this.isSuperset(this._sorted, dep)){
                this._sorted.add(task);
                this._tasks.delete(task);
                return task;
            }
        }
    }
    * [Symbol.iterator]() {
        while (this._tasks.size > 0) {
            yield this.next();
        }
    }
}

const studentenLeben = new Vorrang( [
        [ "schlafen", "studieren" ],
        [ "essen", "studieren" ],
        [ "studieren", "prüfen" ]
    ] );

const handler = {
    get( target, prop, receiver ) {
        console.log( 'Tasks left: ' + target._tasks.size );
        // return 1; // return target.size 
    }
};

const proxy = new Proxy( studentenLeben, handler );

for ( const next of studentenLeben ) {
    console.log(next);
    proxy.next;
}

 // Tests
const test = new Vorrang( [
    [ "schlafen", "studieren" ],
    [ "essen", "studieren" ],
    [ "studieren", "prüfen" ]
] );

console.assert(test._relationen.length === 3);
console.assert(Array.from(test._tasks)[0] === "schlafen");
console.assert(Array.from(test._tasks)[1] === "studieren");
console.assert(Array.from(test._tasks)[2] === "essen");
console.assert(Array.from(test._tasks)[3] === "prüfen");
console.assert(test._tasks.size === 4);
console.assert(test.dep("schlafen").size === 0);
console.assert(Array.from(test.dep("studieren"))[0] === "schlafen");
console.assert(Array.from(test.dep("studieren"))[1] === "essen");
console.assert(test.dep("studieren").size === 2);
console.assert(test.dep("essen").size === 0);
console.assert(Array.from(test.dep("prüfen"))[0] === "studieren");
console.assert(test.dep("prüfen").size === 1);
console.assert(test.isSuperset(test._tasks, new Set(["schlafen"])));
console.assert(!test.isSuperset(test._tasks, new Set(["Haus"])));
console.assert(test.next() === "schlafen");
console.assert(test.next() === "essen");
console.assert(test.next() === "studieren");
console.assert(test.next() === "prüfen");