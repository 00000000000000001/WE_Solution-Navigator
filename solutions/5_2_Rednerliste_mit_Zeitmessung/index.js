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

function add() {

    // Timer und Zeit speichern
    timers.push(Number);
    times.push(0);

    // DOM

    var text_name = document.getElementById('text_name');
    var str = text_name.value;
    var ul = document.getElementById('liste');
    var li = document.createElement('li');
    li.id = "li" + timers.length - 1;
    // li.textContent = str;
    var button = document.createElement('button');
    button.textContent = "Start!";
    button.id = timers.length - 1;
    button.onclick = function(){
        var i = parseInt(button.id);
        // alert(i);
        starten(i);
    };

    var span_name = document.createElement('span');
    var span_zeit = document.createElement('span');
    var span_start = document.createElement('span');

    span_name.id = "span_name" + (timers.length - 1);
    span_zeit.id = "span_zeit" + (timers.length - 1);
    span_start.id = "span_start" + (timers.length - 1);

    span_name.textContent = str + " ";
    span_zeit.textContent = "00:00:00 ";
    span_start.appendChild(button);

    li.appendChild(span_name);
    li.appendChild(span_zeit);
    li.appendChild(span_start);

    ul.appendChild(li);
}

// var eintraege = [];
// var count = 0;

// function foo(id) {
//     // var name = document.getElementById('li'+id);
//     // var str = name.value;
//     // str += times[id];

//     console.log(Math.floor(60 / 60));
// }


// Test-Setup
var id = 0;
var timers = [];
var times = [];

// timers.push(Number);
// times.push(0);

// Berechnung
// var sek = 0;
// var timer = Number;

function starten(i) {
    console.log("Start");
    stopAll();
    timers[i] = setInterval(function(){count(i)}, 1000);
}

function stoppen(i) {
    console.log("Stop");
    clearTimeout(timers[i]);
}

function stopAll() {
    for (var i=0; i < timers.length; ++i) {
        stoppen(i);
    }
}

function count(i) {
    times[i]++;
    show(i);
}

function show(i) {
    var uhr = document.getElementById('span_zeit' + i);
    var sek = times[i];
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