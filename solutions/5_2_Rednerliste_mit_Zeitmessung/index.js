function add() {
    var name = document.getElementById('name');
    var str = name.value;
    var ul = document.getElementById('liste');
    var li = document.createElement('li');
    li.textContent = str;
    var button = document.createElement('button');
    button.textContent = "Start!";
    button.id = count++;
    button.onclick = function(){setInterval(function(){foo(button.id)}, 1000);};
    li.appendChild(button);
    ul.appendChild(li);
}

var count = 0;

// function start() {
//     setInterval(foo, 1000);
//     // console.log("Hallo");
// }

function foo(id) {
    console.log(id);
}