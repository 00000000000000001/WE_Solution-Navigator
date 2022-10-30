function fibonacci(n) {
    var tabelle = [];
    tabelle.push(BigInt(0));
    tabelle.push(BigInt(1));
    while (tabelle.length < n){
        var l = tabelle.length;
        tabelle.push(tabelle[l - 1] + tabelle[l - 2]);
    }
    return tabelle;
}

var tabelle = fibonacci(2000);

// display
for (var i = 0; i < tabelle.length; ++i){
    console.log(tabelle[i] + "(" + i + "th)");
}

console.log(Number.MAX_SAFE_INTEGER); 

// 9007199254740991 is max safe integer
// 8944394323791464 is biggest fib
// it's at pos 78 in the array (79th number)

for (var i = 0; i < tabelle.length; ++i){
    if (tabelle[i] === 8944394323791464){
        console.log("Your index is: " + i);
        break;
    }
}

console.log("Number.MAX_VALUE: " + Number.MAX_VALUE);

// 1.7976931348623157e+308 is max value
// 1.3069892237633987e+308 is biggest displayable fib (1476th)

var biggest = Number.MAX_VALUE;
var value = 0;
for (var i = 0; i < tabelle.length; ++i){
    if (tabelle[i] > biggest){
        value = tabelle[i];
        break;
    }
}

console.log("Biggest fib for numbers is: " + value);
console.log("2000th fib is: " + tabelle[1476]);


// BigInt
// for (var i = 0; i < tabelle.length; ++i){
//     console.log(BigInt(tabelle[i]) + "(" + i + "th)");
// }