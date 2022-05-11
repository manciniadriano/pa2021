interface InterfaceImpiegato { 
    getCognome():string; 
    setCognome(cognome:string);
}

interface InterfaceEmployer { 
    getLastName():string;  
    setLastName(lastName:string);
}

class Impiegato implements InterfaceImpiegato {
  
    private cognome:string;  
    getCognome():string {
        return this.cognome;
    }  
    setCognome(cognome:string):void {
        this.cognome = cognome;
    }  
}

class Employer implements InterfaceEmployer {
  
    private surname:string;  
    getLastName():string {
        return this.surname;
    }  
    setLastName(surname:string):void {
        this.surname = surname;
    }  
}

  
class AdattatoreEmployer extends Employer implements InterfaceEmployer, InterfaceImpiegato {
    getCognome(): string {
        return this.getLastName();
    }
    setCognome(cognome: string) {
        return this.getLastName();
    }
    
}

let impiegato:Impiegato = new Impiegato();
impiegato.setCognome("Rossi");
console.log("Impiegato: " + impiegato.getCognome());

let adattatoreEmployer:AdattatoreEmployer = new AdattatoreEmployer();
adattatoreEmployer.setCognome("Verdi");
console.log("AdattatoreEmployer: " + adattatoreEmployer.getCognome());
