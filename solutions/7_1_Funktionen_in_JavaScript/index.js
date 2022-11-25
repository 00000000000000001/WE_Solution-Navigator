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

function inc1(x) {
    return addf(x)(1);
}

console.assert(inc1(1) === 2);

function inc2(x) {
    return applyf(add)(x)(1);
}

console.assert(inc2(1) === 2);

function inc3(x) {
    return curry(add, x)(1);
}

console.assert(inc3(1) === 2);

//

function methodize( func ) {
    return function add(y) {
        return func(this, y);
    }
}

Number.prototype.add = methodize(add);
console.assert((3).add(4) === 7);

//

function demethodize( method ) {
    return function(x,y) {
        Number.prototype.demethodize = method;
        return (x).demethodize(y);
    }
}

console.assert(demethodize(Number.prototype.add)(5, 6) === 11);

//

function twice( func ) {
    return function(x) {
        return func(x,x);
    }
}

const double = twice(add);
console.assert(double(11) === 22);

const square = twice(mul);
console.assert(square(11) === 121);

//

function composeu(func1, func2) {
    return function(x) {
        return func2(func1(x));
    }
}

console.assert(composeu(double, square)(3) === 36);