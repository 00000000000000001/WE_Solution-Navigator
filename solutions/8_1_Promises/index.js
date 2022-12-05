`Erstellen Sie auf Ihrem lokalen Server (localhost) zwei Text-Dateien 
A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der 
fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer 
Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang 
der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden 
Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. 
Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig 
auf Korrektheit. Verwenden Sie dabei ausschließlich die Promise API 
ohne async / await.`

var datei1 = "";
var datei2 = "";
Promise.all([
    fetch('A.txt').then(
        response => response.text()
    ).then(value => datei1 = value),
    fetch('B.txt').then(
        response => response.text()
    ).then(value => datei2 = value)
])
.then(arr => {
    let zeile = "";
    for(let i = 0; i < arr[0].split('\n').length; ++i){
        zeile = "";
        zeile += arr[0].split('\n')[i];
        zeile += arr[1].split('\n')[i];
        console.log(zeile);
    }
}
);