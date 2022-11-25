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