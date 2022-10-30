console.log("Test von Jonase");
console.log(identity("wsa hier llos"));
console.log(identity_function("was los")());
console.log(add(1,2));
console.log(mul(2,3));


// 4.2

var Person = {
    getName: function(){
        return "Master Chief";
    },
};

var Auto = {
    __proto__: Person,
};

var p = Object.create(Person);
p.name = "Hubert";

console.log(p.getName());

var a = Object.create(Auto);

console.log(a.getName());

// sonstwas

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