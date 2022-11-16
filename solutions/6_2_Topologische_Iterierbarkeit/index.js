class Vorrang {
    // Konstruktor nimmer Vorrangrelationen entgegen
    constructor (rels) {
        for (const r of rels){
            console.log(r);
        }
    }
}

const studentenLeben = new Vorrang( [
    [ "schlafen", "studieren" ],
    [ "essen", "studieren" ],
    [ "studieren", "prüfen" ]
  ] )