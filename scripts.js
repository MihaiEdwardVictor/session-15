//Objects example


// const firstBook = {
//     id:1,
//     title: "Harry Potter",
//     date: '15.11.1998',
//     getThis: function () {
//         console.table(this);
//     },
//     getBookDetails: function(){
//         return console.log("Book with id: "+this.id+" and title: "+ this.title);
//     },
// };
// console.log(firstBook);

// const secondBook = {
//     id:2,
//     title: 'Fifty reds of bacon',
//     date: '15.10.2018',
// };

// firstBook.getBookDetails();
// firstBook.getThis();


//homework


// Exercițiul 1: Crearea și Manipularea Obiectului
// Creează un obiect numit person cu proprietățile name, age și city.

// Modifică proprietatea age a obiectului.

// Accesează și afișează proprietățile obiectului în consolă.

const person = {
    name:"Andrei",
    age:24,
    city:"Arges",
};

function displayInfo(){
    console.log(`Numele meu este ${this.name}, am ${this.age} ani si sunt din ${this.city}`);
}

person.displayInfo = displayInfo;
person.displayInfo();


// Exercițiul 2: Metode în Obiect
// Creează un obiect numit calculator cu o metodă numită sum care primește doi parametri și returnează suma lor.

// Folosește metoda sum pentru a calcula suma a două numere și afișează rezultatul în consolă.


// const calculator= {
//     number1: 10,
//     number2: 20,
//     get sum(){
//         return this.number1 + this.number2;
//     },
// };

// console.log(calculator.sum)

const calculator = {
    number1:10,
    number2:20,
    calculateSum: function(){
        console.log(this.number1+this.number2);
    }
};

calculator.calculateSum();


// Exercițiul 3: Obiecte Înăuntrul Obiectelor
// Creează un obiect numit car cu proprietățile make, model și year.

// Adaugă un obiect numit engine în interiorul obiectului car, care are proprietățile power și fuelType.

// Accesează și afișează proprietatea power a obiectului engine în consolă.


const car = {
    make: "BMW",
    model: "M5",
    year: 2018,
    engine: {
        power: "500 bhp",
        fueltype: "Petrol",
    },
}

console.log(car.engine.power)


// Exercițiul 4: Compararea Obiectelor
// Creează două obiecte book1 și book2 cu proprietățile title și author.

// Compară proprietățile obiectelor book1 și book2 și afișează un mesaj în consolă indicând dacă sunt egale sau nu.


const book1 = {
    title: "Game Of Thrones",
    author: "George R.R. Martin",
};

const book2 = {
    title: "Fifty Shades Of Ketchup",
    author: "Some Guy",
};

const isEqual = (book1, book2) => {

    const objKeys1 = Object.keys(book1);
    const objKeys2 = Object.keys(book2);
  
    if (objKeys1.length !== objKeys2.length) return false;
  
    for (var key of objKeys1) {
      const value1 = book1[key];
      const value2 = book2[key];
  
      const isObjects = isObject(value1) && isObject(value2);
  
      if ((isObjects && !isDeepEqual(value1, value2)) ||
        (!isObjects && value1 !== value2)
      ) {
        return false;
      }
    }
    return true;
  };
  
  const isObject = (object) => {
    return object != null && typeof object === "object";
  };
  
  console.log(isEqual(book1, book2));

