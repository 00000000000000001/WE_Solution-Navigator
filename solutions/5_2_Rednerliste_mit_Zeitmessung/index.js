function add() {
    var name = document.getElementById('name');
    var str = name.value;
    console.log(str);

    var ul = document.getElementById('liste');
    var li = document.createElement('li');
    li.textContent = str;
    var button = document.createElement('button');
    button.textContent = "Start!";
    button.onclick = start;
    li.appendChild(button);
    ul.appendChild(li);
}

function start() {
    setInterval(count, 1000);
}

function count() {
    console.log("Test");
}