function add() {
    var name = document.getElementById('name');
    var str = name.value;
    console.log(str);

    var ul = document.getElementById('liste');
    var li = document.createElement('li');
    li.textContent = str;
    ul.appendChild(li);
    start();
}

function start() {
    setInterval(count, 1000);
}

function count() {
    console.log("Test");
}