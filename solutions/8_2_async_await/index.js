`Erstellen Sie auf Ihrem lokalen Server (localhost) zwei Text-Dateien 
A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der 
fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer 
Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang 
der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden 
Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. 
Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig 
auf Korrektheit. Verwenden Sie dabei ausschließlich die Promise API 
ohne async / await.`

function fetch_txt(filename) {
    return new Promise((resolve) => {
      fetch(filename).then(content => resolve(content.text()));
      
    });
  }

  async function f1() {
    const a = await fetch_txt("A.txt");
    const b = await fetch_txt("B.txt");
    for (let i = 0; i < a.split('\n').length; ++i){
        console.log(a.split('\n')[i] + b.split('\n')[i]);
    }
  }
  
  f1();
  