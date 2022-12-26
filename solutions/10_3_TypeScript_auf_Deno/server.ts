
const url = Deno.args[0];
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());
const str = new TextDecoder().decode(body);

let min_anz:number;
let min_diff:number;
let min_fall:number;
let min_inz:number;
let min_tod:number;

let max_anz:number;
let max_diff:number;
let max_fall:number;
let max_inz:number;
let max_tod:number;

let avg_anz:number;
let avg_diff:number;
let avg_fall:number;
let avg_inz:number;
let avg_tod:number;

let sum_anz:number;
let sum_diff:number;
let sum_fall:number;
let sum_inz:number;
let sum_tod:number;

import {
    DOMParser,
    initParser,
  } from "https://deno.land/x/deno_dom/deno-dom-wasm-noinit.ts";
  
  (async () => {
    // initialize when you need it, but not at the top level
    await initParser();
  
    let doc = new DOMParser().parseFromString(str,"text/html");
    const tds = doc.querySelectorAll("td");

    let i:number = 0;
    for (const td of tds) {
        switch (i%6){
            case 1: // anz
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
        console.log(td.textContent);
    }
  })();