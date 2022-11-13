function eval() {
    var eingabe = document.getElementById("eingabe");
    var str = eingabe.textContent;
    const arr = str.split(";");
    arr.splice(arr.length-1, arr.length); // Eingabe scannen

    // Regel-Paare in einem Array
    var regeln = [];
    for (var i=0; i < arr.length; ++i) {
        // regeln.push(arr[i].split(","));
        Aufgaben.add(arr[i].split(","));
    }

    // Liste anzeigen
    var liste = Aufgaben.topsort();

    var ol_liste = document.getElementById("ol_liste");
    for (var i=0; i < liste.length; ++i) {
        var li = document.createElement('li');
        li.textContent = liste[i];
        ol_liste.appendChild(li);
    }



    console.log(liste);
}

var Aufgaben = {
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
        }
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