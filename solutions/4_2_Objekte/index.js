var Auto = {
    id : "",
    __proto__ : Person,
};

var Person = {
    name : "",
    __proto__ : Auto,
};

var a1 = Object.create(Auto);
var a2 = Object.create(Auto);

a1.id = "Auto 1";
a2.id = "Auto 2";

var p1 = Object.create(Person);
var p2 = Object.create(Person);

p1.name = "Horst";
p2.name = "Maria";

a1.__proto__ = p1;
a2.__proto__ = p2;
a2.__proto__ = p1;

// curr = Object.getPrototypeOf(a1);
// console.log(curr);
function conflict(auto){
    var allPersons = []
    , curr = auto
    do{
        // if (!allPersons.includes(curr.besitzer)){
            allPersons.push(curr);
        // } else{
        //     return true;
        // }
        // console.log(curr.id);
        
    } while(curr = Object.getPrototypeOf(curr))
    return allPersons;
}

// auf Konflikte testen

// conflict(a2);
console.log(conflict(a2));
