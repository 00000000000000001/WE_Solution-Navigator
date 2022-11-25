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

function mul(x,y) {
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

//

function composeb( func1, func2 ) {
    return function ( x, y, z ) {
        return func2(func1(x,y),z);
    }
}

console.assert(composeb(add, mul)(2, 3, 5) === 25);

//

// function once( func ) {
//     var ex = false;
//     return (function(){
//         if (!ex){
//             ex = true;
//             return func;
//         } else{
//             console.log("behindert?");
//         }
//     })();
// }

// add_once = once(add);

function once( func ){
    var ex = false;
    return (function(  ){
        if (ex){
            return;
        } else {
            ex = true;
            return func;
        }
    })();
};

add_once = once(add);

// console.log(add_once(3,4));
console.assert(add_once(3,4) === 7);
console.assert(add_once(3,4) !== 7);

//

function counterf( start ) {
    return (function(){
        var inner = start;
        return {
            inc: function(){
                return ++inner;
            },
            dec: function(){
                return --inner;
            }
        }
    })();
}

let counter = counterf(10);
console.assert(counter.inc() === 11);
console.assert(counter.dec() === 10);

//

function revocable( func ) {
    let f = func;
    return {
        invoke(msg){
            return f(msg);
        },
        revoke(){
            // f = function(){};
            f = undefined;
        }
    }
}

temp = revocable(alert);
temp.invoke(7);
temp.revoke();
// temp.invoke(8);

//

function vector() {
    return (function () {
        let arr = [];
    
        return {
            get : function(i) {
                return arr[i];
            },
            store : function(i, value) {
                arr[i] = value;
            },
            append : function(value) {
                arr.push(value);
            }
        }
    
    }());
}


my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);

console.assert(my_vector.get(0) === 7); // 7
console.assert(my_vector.get(1) === 8); // 8
