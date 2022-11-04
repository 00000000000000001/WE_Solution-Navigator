console.log("Bin da");

const a = document.createElement('a');
a.appendChild(document.createTextNode('text'));

// innerHTML
a.innerHTML = 'text';

// innerText
a.innerText = 'text';

// textContent
a.textContent = 'text';

// outerHTML
a.outerHTML = 'text';

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

appendRow( "Test1", "Test2", "Test3", "test4");