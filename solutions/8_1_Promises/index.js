`Erstellen Sie auf Ihrem lokalen Server (localhost) zwei Text-Dateien 
A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der 
fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer 
Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang 
der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden 
Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. 
Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig 
auf Korrektheit. Verwenden Sie dabei ausschließlich die Promise API 
ohne async / await.`

fetch('A.txt').then(response => console.log(response));
fetch('B.txt').then(response => console.log(response)); 