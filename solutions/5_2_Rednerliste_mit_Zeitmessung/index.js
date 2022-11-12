function add() {
    // const list = document.getElementById('list');
    var name = document.getElementById('name');
    var str = name.value;
    console.log(str);

    var ul = document.getElementById('liste');
    var li = document.createElement('li');
    li.textContent = str;
    ul.appendChild(li);
    // var li = document.createElement('li');
    // c1.textContent = t1;

    // row.appendChild(c1);
    // row.appendChild(c2);
    // row.appendChild(c3);
    // row.appendChild(c4);
    // table.appendChild(row);
}
