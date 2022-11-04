function appendRow(t1, t2, t3, t4) {
    const table = document.getElementById('table');
    var c1 = document.createElement('td');
    c1.textContent = t1;
    var c2 = document.createElement('td');
    c2.textContent = t2;
    var c3 = document.createElement('td');
    c3.textContent = t3;
    var c4 = document.createElement('td');
    c4.textContent = t4;
    let row = document.createElement('tr');
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    table.appendChild(row);
}

const a = document.createElement('a');
a.appendChild(document.createTextNode('text'));

// innerHTML
var t0 = performance.now();
a.innerHTML = 'text';
var t1 = performance.now();
const test0 = t1-t0;

// innerText
t0 = performance.now();
a.innerText = 'text';
t1 = performance.now();
const test1 = t1-t0;

// textContent
t0 = performance.now();
a.textContent = 'text';
t1 = performance.now();
const test2 = t1-t0;

// outerHTML
t0 = performance.now();
a.outerHTML = 'text';
t1 = performance.now();
const test3 = t1-t0;

appendRow( test0, test1, test2, test3);