var Person = {
   
};

var Auto = {
    id : "",
    getID: function(){
        return this.id;
    },
};

var mark = Object.create(Person);
var julia = Object.create(Person);
var a1 = Object.create(Auto);
a1.id = "a1";
var a2 = Object.create(Auto);
a2.id = "a2";
var a3 = Object.create(Auto);
a3.id = "a3";

// Mark besitzt Auto 1 und Auto 2. 

mark.autos = [a1, a2];

// Julia besitzt Auto 3. 

julia.autos = [a3];

// ausgeben
console.log("Marks Autos:");
console.log(mark.autos[0].getID());
console.log(mark.autos[1].getID());

console.log("Julias Autos:");
console.log(julia.autos[0].getID());