
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

let avg_anz:number = 0;
let avg_diff:number = 0;
let avg_fall:number = 0;
let avg_inz:number = 0;
let avg_tod:number = 0;

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
        console.log(tds[i].textContent);
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
            case 2: // diff
                break;
            case 3: // fall
                break;
            case 4: // inz
                break;
            case 5: // tod
                break;
            default:
                
        }
    }
    console.log(`
    min. Anzahl: ${min_anz}
    max. Anzahl: ${max_anz}
    avg. Anzahl: ${sum_anz / 16}
    sum. Anzahl: ${sum_anz}
    `);
  })();