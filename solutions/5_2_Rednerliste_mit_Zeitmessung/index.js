function add() {
    var name = document.getElementById('name');
    var str = name.value;
    var ul = document.getElementById('liste');
    var li = document.createElement('li');
    li.textContent = str;
    var button = document.createElement('button');
    button.textContent = "Start!";
    button.id = count++;
    button.onclick = function(){
        for (var i = 0; i < timers.length; ++i) {
            clearTimeout(timers[i]);
        }
        var timer = setInterval(function(){foo(button.id)}, 1000);
        timers.push(timer);
    };
    li.appendChild(button);
    ul.appendChild(li);
}

var timers = [];
var count = 0;

function foo(id) {
    console.log(id);
}