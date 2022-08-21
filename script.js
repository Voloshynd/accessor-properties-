'use strict'; 

const person ={
    name:'Dmytro',
    age: 32,
    surName: true, 

    get userAge(){// pobira wartosc
        return this.age;
    },

    set userAge(num){// musi przyjmowac jakis argument zewnatrz, set sluzy do ustawiana wartosci  
        this.age = num; 
    },

    set userSurName(surName){// musi przyjmowac jakis argument zewnatrz, set sluzy do ustawiana wartosci  
        this.surName = surName; 
    },

    get userSurName(){//  w get mozna od razu dokonywac jakies obliczenia 
        return this.surName;
    },

    get fullName(){
        return `${this.name} ${this.surName}`
    },

    set fullName(value) {
        [this.name, this.surName] = value.split(" ");// przepisanie za pomoca destrukturyzacji 
    }
}

console.log(person.userAge = 30);// nie uzywamy nawiasow, pozwala pracowac z metoda get jak z wlasciwoscia
console.log(person.userAge); 
console.log(person.surName = 'Voloshyn');
console.log(person.surName); 
console.log(person.fullName); // odzczytujemy jako zwykla wlasciwosc 
console.log(person.fullName = "Alice Cooper");
console.log(person.fullName);