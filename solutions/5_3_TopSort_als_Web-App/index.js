function eval() {
    var eingabe = document.getElementById("eingabe");
    var str = eingabe.textContent;
    const arr = str.split(";");
    arr.splice(arr.length-1, arr.length); // 

    var regeln = [];
    var regel = [];
    for (var i=0; i < arr.length; ++i) {
        regeln.push(regel = regeln[i].split(","));
    }
    console.log(regeln);
}
