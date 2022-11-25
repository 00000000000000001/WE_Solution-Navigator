function identity_function(param) {
    return function() {
        return param;
    }
}

let test = 9;
let res = identity_function(test);
console.assert(res() === test);

//

function addf(x) {
    return function(y) {
        return x + y;
    }
}

console.assert(addf(2)(3) === 5);

//

function applyf( func ) {
    return function(x){
        return function(y) {
            return func(x,y);
        }
    }
}

function mul(x,y) {
    return x*y;
}

console.assert(applyf(mul)(5)(6) === 30);

// 

function curry( func, x) {
    return function(y) {
        return func(x,y);
    }
}

function add(x,y) {
    return x+y;
}

const add3 = curry(add, 3)(4);
console.assert(add3 === 7);

const mul3 = curry(mul, 5)(6);
console.assert(mul3 === 30);

//