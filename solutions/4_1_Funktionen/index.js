console.log("Test von Jonase");
console.log(identity("wsa hier llos"));
console.log(identity_function("was los")());
console.log(add(1,2));
console.log(mul(2,3));
console.log(applyf(mul)(5)(6));

function identity(param){
    return param;
}

function identity_function(param){
    return function(){
        return param;
    }
}

function add(a, b){
    return a + b;
}

function mul(a, b){
    return a * b;
}

function addf(x){
    return function(y){
        return add(x, y);
    }
}

function mulf(x){
    return function(y){
        return mul(x, y);
    }
}

function applyf(f){
    return f(x, y);
}