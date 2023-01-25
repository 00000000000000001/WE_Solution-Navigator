/*
 Schreiben Sie eine Vue.js Single File Component mit einem Text-Eingabefeld und 3 Ausgabefeldern, 
 in denen man während des Tippens sehen kann, (a) wie viele Buchstaben (b) wie viele Leerzeichen 
 und (c) wie viele Worte man in das Text-Eingabefeld bereits eingegeben hat.

Betten Sie Ihre Komponente in eine Webseite zweimal ein und testen Sie, ob beide Komponenten 
unabhängig voneinander sind. 
*/

let eingabe = document.createElement('input');
eingabe.type = 'textfield';
