var aufgaben = {
    regeln : [],
    add: function(dep){
        this.regeln.push(dep);
    },
    tasks : function(){
        var res = [];
        for (var i = 0; i < this.regeln.length; ++i){
            if (!res.includes(this.regeln[i][0])){
                res.push(this.regeln[i][0]);
            }
            if (!res.includes(this.regeln[i][1])){
                res.push(this.regeln[i][1]);
            }
        }
        return res;
    },
    topsort : function() {
                var res = [];
                var tasks = this.tasks();
                var i = 0;
                while ( tasks.length > 0 )
                {
                    var dep = this.dep(tasks[i]);
                    if (dep.every(val => res.includes(val))) {
                        res.push(tasks[i]);
                        tasks.splice(i,1);
                        i = 0;
                    }
                    else
                    {
                        ++i;
                    }
                    // tasks.splice(0,1);
                }

                // console.log(res);
                return res;
            },
    dep : function(task) {
        var res = [];
        for (var i = 0; i < this.regeln.length; ++i){
            if (this.regeln[i][1] === task){
                res.push(this.regeln[i][0]);
            }
        }
        return res;
    }
};


// Tests

var dep1 = ["schlafen","studieren"];
var dep2 = ["essen","studieren"];
var dep3 = ["studieren","prüfen"];

// regeln werden gespeichert
aufgaben.add(dep1);
aufgaben.add(dep2);
aufgaben.add(dep3);
console.assert(aufgaben.regeln[0] === dep1);
console.assert(aufgaben.regeln[1] === dep2);
console.assert(aufgaben.regeln[2] === dep3);

// task Liste wird richtig ausgegeben
console.assert(aufgaben.tasks().length === 4);
console.assert(aufgaben.tasks().includes("schlafen"));
console.assert(aufgaben.tasks().includes("studieren"));
console.assert(aufgaben.tasks().includes("essen"));
console.assert(aufgaben.tasks().includes("prüfen"));

// dep Liste wird richtig berechnet
console.assert(aufgaben.dep("studieren").includes("schlafen"));
console.assert(aufgaben.dep("studieren").includes("essen"));
console.assert(!aufgaben.dep("studieren").includes("prüfen"));
console.assert(!aufgaben.dep("studieren").includes("studieren"));

// topsort gibt eine Liste in richtiger Reihenfolge der Elemente wieder
// console.assert(aufgaben.topsort() === ["schlafen", "essen", "studieren", "prüfen"]);
console.log(aufgaben.topsort());
// aufgaben.topsort()