/*
   Implementieren Sie ein eigenes Balkendiagramm mit HTML, 
   Inline SVG, CSS und JavaScript. Geben Sie die Daten für 
   das Balkendiagramm im JSON-Format vor. Nehmen Sie als 
   Beispieldaten die COVID-19: Fallzahlen in Deutschland. 
   Animieren Sie die Grafik (siehe z.B. Highchart Bar Chart).
*/


let groups = new Map();

function print_entries(entry) {
    for (const [key, value] of Object.entries(entry)) {
        groups.set(key, value);
    }
}

function fetch_txt(filename) {
    return new Promise((resolve) => {
        fetch(filename).then(content => resolve(content.json()));
    });
}

async function f1() {
    const a = await fetch_txt("daten.json");
    print_entries(a);
    console.log(groups);
    // console.log();

    // Balken
    // - Dicke: 5
    // - Anz.: 5
    // - Benötigter Platz: Dicke * Anz. = 25

    const stroke = 5;
    const number = Object.keys(groups.values().next().value).length;
    const space_bar = stroke * number;

    // y-Bezeichnungen
    // - Abstand oben: 60
    // - Abstamd unten: 70
    // - Abstand: 25 (s. Benötigter PLatz Balken)
    // - Reihen: 17
    // - Höhe Insgesamt: (Reihen-1) * 25 + 60 + 70

    const space_top = 60;
    const space_bottom = 70;
    const space = stroke * number;
    const rows = groups.size;
    const height = (rows - 1) * space + space_top + space_bottom;

    // Striche
    // - Höhe_Strich: Höhe Insgesamt - 50

    const height_line = height - 50;

    // x-Bezeichnungen
    // - y = Höhe_Strich + 25

    const y = height_line - 50;

    create_svg(height);
    create_rect();
    create_lines(height - 50);
    create_x(x_max(), height - 50 + 25);
    create_y(space_bar);
    create_bars(number);
}

function x_max() {
    var max = 0;
    for (let [key, value] of groups) {
        Object.entries(value).forEach(([key, value]) => {
            if (value > max) {
                max = value;
            }
        });
    }
    return max;
}

function create_svg(height) {
    const svg = document.getElementById("diagramm");
    svg.innerHTML = `
    <svg width="520px" height="${height}px" viewBox="0,0,520,${height}" id="svg">
    </svg>
    `;
}

function create_rect() {
    const svg = document.getElementById("svg");
    svg.innerHTML = `
    <rect width="100%" height="100%" fill="gray"/>
    `;
}

function create_lines(height) {
    const svg = document.getElementById("svg");
    let x1 = 60;
    for (i = 0; i < 10; ++i) {
        svg.innerHTML += `
        <line x1="${x1}px" y1="50px" x2="${x1}px" y2="${height}px" stroke="white"/>
        `;
        x1 += 50;
    }
}

function create_x(max, y) {
    const svg = document.getElementById("svg");
    let x = 50;
    for (i = 0; i < 10; ++i) {
        svg.innerHTML += `
        <text x="${(i + 1) * x}" y="${y}" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="8px">${Math.round(i * (max / 9))}</text>
        `;
    }
}

function create_y(space) {
    const svg = document.getElementById("svg");
    let y = 60;
    for (let [key, value] of groups) {
        svg.innerHTML += `
        <foreignObject x="5" y="${y}" width="50px" height="3em" color="white" font-size="8px">
            <div xmlns="http://www.w3.org/1999/xhtml">
                ${key}
            </div>
        </foreignObject>
        `;
        y += space;
    }
}

function create_bars(number) {

    // max = 7_599_255
    // width = 520px
    let max = x_max();
    let width = 520;
    let div = max/(width-70);

    let colors = ["red", "blue", "green", "yellow", "magenta", "white"];

    const svg = document.getElementById("svg");
    let y = 60;
    let i = 0;
    for (let [key, value] of groups) {
        i = 0;
        Object.entries(value).forEach(([key, value]) => {
            svg.innerHTML += `
            <line x1="60px" y1="${y}px" x2="${value/div+60}px" y2="${y}px" stroke="${colors[i++]}" stroke-width="5"/>
            `;
            y += 5;
        });
        // y += 5;
    }
}

f1();