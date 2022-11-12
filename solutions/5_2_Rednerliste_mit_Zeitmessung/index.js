// var Eintrag = {
//     timer: Object,
//     name: "",
//     s: 0,
//     start: function() {
//         this.timer = setInterval(function(){
//             this.s += 1;
//             console.log(function(){

//             return s;
//             }());
//         }, 1000);
//     },
//     stop: function() {
//         clearTimeout(this.timer);
//     },
// }

// function add() {
//     var name = document.getElementById('name');
//     var str = name.value;
//     var ul = document.getElementById('liste');
//     var li = document.createElement('li');
//     li.id = "li" + count++;
//     li.textContent = str;
//     var button = document.createElement('button');
//     button.textContent = "Start!";
//     button.id = count;
//     button.onclick = function(){
//         for (var i = 0; i < eintraege.length; ++i) {
//             eintraege[i].stop();
//         }
//         eintraege.push(Object.create(Eintrag));
//         eintraege[0].start();
//     };
//     li.appendChild(button);
//     ul.appendChild(li);
// }

// var eintraege = [];
// var count = 0;

// function foo(id) {
//     // var name = document.getElementById('li'+id);
//     // var str = name.value;
//     // str += times[id];

//     console.log(Math.floor(60 / 60));
// }

// Berechnung
var sek = 0;
var timer = Object;

function starten() {
    console.log("Start");
    timer = setInterval(count, 1000);
}

function stoppen() {
    console.log("Stop");
    clearTimeout(timer);
}

function count() {
    ++sek;
    show();
}

function show() {
    var uhr = document.getElementById('uhr');
    var h = Math.floor(sek / 3600);
    var m = Math.floor((sek - h * 3600) / 60);
    var s = Math.floor(((sek - h * 3600) - m * 60));
    if(s < 10) {
        s = "0" + s;
    }
    if(m < 10) {
        m = "0" + m;
    }
    if(h < 10) {
        h = "0" + h;
    }
    var str = h + ":" + m + ":" + s + " ";
    uhr.textContent = str;
}