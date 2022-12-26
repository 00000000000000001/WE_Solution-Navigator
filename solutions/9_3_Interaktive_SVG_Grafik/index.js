function create_svg() {
    const elem = document.getElementById('ttt');
    elem.innerHTML = `
    <svg width="333" height="333" viewBox="0,0,333,333" id="svg">
    </svg>
    `;
}

function svgTransform(domX, domY, svgElement) {
    const svgPoint = svgElement.createSVGPoint(); 
    svgPoint.x = domX;
    svgPoint.y = domY;
    return svgPoint.matrixTransform(svgElement.getScreenCTM().inverse());
}

let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

player = true;

function circle(x, y) { // = 1
    console.log('circle: ' + x + ',' + y);
    if (arr[x][y] === 0) {
        arr[x][y] = 1;
    }
}

function cross(x, y) { // = 2
    console.log('cross: ' + x + ',' + y);
    if (arr[x][y] === 0) {
        arr[x][y] = 2;
    }
}

function create_pieces() {
    const elem = document.getElementById('svg');
    for (i = 0; i < arr.length; ++i) {
        for (j = 0; j < arr[i].length; ++j) {
            if (arr[i][j] === 1) {
                elem.innerHTML += `
                <g id="cross" stroke-width="5" fill="#14bdac" stroke="black">
                    <circle cx="${55.5+(i*111)}" cy="${55.5+(j*111)}" r="55.5"/>
                </g>
                `;
            } else if(arr[i][j] === 2) {
                elem.innerHTML += `
                <g id="cross" stroke-width="5" fill="#14bdac" stroke="black">
                    <line x1="${i*111}" y1="${j*111}" x2="${i*111+111}" y2="${j*111+111}"/>
                    <line x1="${i*111+111}" y1="${j*111}" x2="${i*111}" y2="${j*111+111}"/>
                </g>
                `;
            }
        }
    }
}

function clear() {
    const elem = document.getElementById('ttt');
    elem.innerText = '';
}

function render_all() {
    clear();
    create_svg();
    create_board();
    create_pieces();
}

function check_for_winner(){
    let pieces = new Map();
    pieces.set(1, 'circle');
    pieces.set(2, 'cross');
    if(arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]){
        if(arr[0][0] !== 0){
            alert(`${pieces.get(arr[0][0])} won`);
        }   
    } 
    if(arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]){
        if(arr[0][1] !== 0){
            alert(`${pieces.get(arr[0][1])} won`);
        }   
    }
    if(arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2]){
        if(arr[0][2] !== 0){
            alert(`${pieces.get(arr[0][2])} won`);
        }   
    }
    if(arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]){
        if(arr[0][0] !== 0){
            alert(`${pieces.get(arr[0][0])} won`);
        }   
    }
    if(arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]){
        if(arr[1][0] !== 0){
            alert(`${pieces.get(arr[1][0])} won`);
        }   
    }
    if(arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2]){
        if(arr[2][0] !== 0){
            alert(`${pieces.get(arr[2][0])} won`);
        }   
    }
    if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]){
        if(arr[0][0] !== 0){
            alert(`${pieces.get(arr[0][0])} won`);
        }   
    }
    if(arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2]){
        if(arr[2][0] !== 0){
            alert(`${pieces.get(arr[2][0])} won`);
        }   
    } 
}

function create_board() {
    const elem = document.getElementById('svg');
    elem.innerHTML += `
    <g id="cross" stroke-width="5" fill="#14bdac" stroke="black">
    <rect x="0" y="0" width="100%" height="100%"/>
    <line x1="0" y1="111" x2="333" y2="111"/>
    <line x1="0" y1="222" x2="333" y2="222"/>
    <line x1="111" y1="0" x2="111" y2="333"/>
    <line x1="222" y1="0" x2="222" y2="333"/>
    </g>
    `;
    elem.addEventListener("mousedown", event => {
        const svgPoint = svgTransform(event.x, event.y, elem);

        if (player) {
            circle(Math.floor(svgPoint.x / 111), Math.floor(svgPoint.y / 111));
        } else {
            cross(Math.floor(svgPoint.x / 111), Math.floor(svgPoint.y / 111));
        }
        player = !player;
        render_all();
        check_for_winner();
    });
}

render_all();