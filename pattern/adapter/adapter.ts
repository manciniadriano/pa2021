 class Impiegato { 
    cognome:string;    
    public getCognome():string{
        return this.cognome;
    }
    public setCognome(cognome:string) {
        this.cognome = cognome;
    } 
}

class Employer {
 
    private lastName:string = null;
 
    public getLastName():string {
        return this.lastName;
    }
 
    public setLastName(lastName:string):void {
        this.lastName = lastName;
    }   
}

class AdattatoreEmployer extends Impiegato {
 
    employer:Employer;
 
    constructor( employer:Employer) {
        super();
        this.employer = employer;
    }
 
    public getCognome():string {
        return this.employer.getLastName();
    }
 
    public setCognome(cognome: string):void {
        this.employer.setLastName(cognome);
    }

}

let impiegato:Impiegato = new Impiegato();
impiegato.setCognome("Rossi");
console.log("Impiegato: " + impiegato.getCognome());

let adattatoreEmployer:AdattatoreEmployer = new AdattatoreEmployer( new Employer() );
adattatoreEmployer.setCognome("Verdi");
console.log("AdattatoreEmployer: " + adattatoreEmployer.getCognome());