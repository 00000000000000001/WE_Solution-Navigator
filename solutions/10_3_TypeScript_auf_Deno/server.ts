
const url = Deno.args[0];
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());
const str = new TextDecoder().decode(body);

let min_anz:number = Number.MAX_SAFE_INTEGER;
let min_diff:number = Number.MAX_SAFE_INTEGER;
let min_fall:number = Number.MAX_SAFE_INTEGER;
let min_inz:number = Number.MAX_SAFE_INTEGER;
let min_tod:number = Number.MAX_SAFE_INTEGER;

let max_anz:number = 0;
let max_diff:number = 0;
let max_fall:number = 0;
let max_inz:number = 0;
let max_tod:number = 0;

let sum_anz:number = 0;
let sum_diff:number = 0;
let sum_fall:number = 0;
let sum_inz:number = 0;
let sum_tod:number = 0;

import {
    DOMParser,
    initParser,
  } from "https://deno.land/x/deno_dom/deno-dom-wasm-noinit.ts";
  
  (async () => {
    // initialize when you need it, but not at the top level
    await initParser();
  
    let doc = new DOMParser().parseFromString(str,"text/html");
    const tds = doc.querySelectorAll("td");

    for (var i = 0; i < 16*6; i++) {
        let s = tds[i].textContent;
        s = s.replaceAll('.', '');
        s = s.replaceAll(',', '.');
        switch (i%6){
            case 1: // anz
                // min
                if (Number(s) < min_anz){
                    min_anz = Number(s);
                }
                // max
                if (Number(s) > max_anz){
                    max_anz = Number(s);
                }
                //sum
                sum_anz += Number(s);
                break;
            // TODO:
            case 2: // diff
                // min
                if (Number(s) < min_diff){
                    min_diff = Number(s);
                }
                // max
                if (Number(s) > max_diff){
                    max_diff = Number(s);
                }
                //sum
                sum_diff += Number(s);
                break;
            case 3: // fall
                // min
                if (Number(s) < min_fall){
                    min_fall = Number(s);
                }
                // max
                if (Number(s) > max_fall){
                    max_fall = Number(s);
                }
                //sum
                sum_fall += Number(s);
                break;
            case 4: // inz
                // min
                if (Number(s) < min_inz){
                    min_inz = Number(s);
                }
                // max
                if (Number(s) > max_inz){
                    max_inz = Number(s);
                }
                //sum
                sum_inz += Number(s);
                break;
            case 5: // tod
                // min
                if (Number(s) < min_tod){
                    min_tod = Number(s);
                }
                // max
                if (Number(s) > max_tod){
                    max_tod = Number(s);
                }
                //sum
                sum_tod += Number(s);
                break;
            default:
                
        }
    }
    console.log(`
min. Anzahl: ${min_anz}
max. Anzahl: ${max_anz}
avg. Anzahl: ${sum_anz / 16}
sum. Anzahl: ${sum_anz}

min. Differenz: ${min_diff}
max. Differenz: ${max_diff}
avg. Differenz: ${sum_diff / 16}
sum. Differenz: ${sum_diff}

min. Fälle: ${min_fall}
max. Fälle: ${max_fall}
avg. Fälle: ${sum_fall / 16}
sum. Fälle: ${sum_fall}

min. Inzidenz: ${min_inz}
max. Inzidenz: ${max_inz}
avg. Inzidenz: ${sum_inz / 16}
sum. Inzidenz: ${sum_inz}

min. Tode: ${min_tod}
max. Tode: ${max_tod}
avg. Tode: ${sum_tod / 16}
sum. Tode: ${sum_tod}
    `);
  })();