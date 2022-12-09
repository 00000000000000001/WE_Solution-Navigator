function myfetch(filename) {
	return new Promise((resolve) => {
		fetch(filename).then(content => resolve(content.json()));
	});
}

let data;
let map_content = new Map();
let map_ref = new Map();

async function all(param) {
	data = await myfetch("inhalte.json");
}

function clearUntermenue(){
	let menu = document.getElementById('untermenue');
	menu.textContent = "";
}

function show_article( value ){
	let article = document.getElementById('article');
	article.textContent = "";
	article.textContent = map_content.get(value);
}

function show_references( value ){
	let article = document.getElementById('references');
	article.textContent = "";
	article.textContent = map_ref.get(value);
}

function addKnopf( value ){
	let knopf = document.createElement('div');
	knopf.className = 'button';
	knopf.addEventListener("click", function (){
		show_article(value);
		show_references(value);
	});
	knopf.textContent = value;
	let menu = document.getElementById('untermenue');
	menu.appendChild(knopf);
}

function show( key ){
	const menu = data[key];
	clearUntermenue();
	Object.entries(menu).forEach(([key, value]) => {
		addKnopf(key);
		map_content.set(key, value.content);
		map_ref.set(key, value.references);
	});
}

all();