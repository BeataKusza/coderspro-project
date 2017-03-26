//Write a JS function to print all the methods in an JS object----to work!!!

console.log(printAllProperties(Array));
["lenght", "name", "arguments", "celler", "properties", "isArray","observe", "unobserve"];

function two() {
var data = Array.prototype.slice.call(arguments);
return data.indexOf(2) ≠ -1;
}

two(1,2,3); //dwójka jest w argumentach
two(1,3); //dwójka nie jest w argumentach
//definiowanie właściwości
var person = {
name: 'Kuba';
};
//person jest zdefiniowane i nic nie wypluje//
person.age = 12;
// [[Put]] wewnętrzna metoda JS do tworzenia nowych właściwości, rezerwuje miejsce w objecie
później ustalona jest wartość. ustalane sa atrybuty wlasciwosci-wyliczalana,obliczalna
// [[Set]] nadpisuje wartość ktora istnieje
np. person.name = 'Bartek';
consol.log(person.name); //Bartek -odpalenie set, ktora wypluwa 'Bartek'. mozna sie do tego wciac
odpalanie konsoli -F12
//wykrywanie wlascowosci
if(person.age) {
  //
}--tego nie robic
var car = {

  manufacturer; 'ford'
}
console.log('manufacturer' in car); //true
or hasOnProperty
//Warunek if zwróci false gdy bęzie równe null, undefined, 0, false,NaN,''
//usuwanie własciwosci objektuu

var animal = {
  gender: 'female'
}
console.log(animal.gender) //'female'
//1 delete
delete animal.gender;
console.log(animal.gender); //undefined
//2 przypisanie wartosci null
animal.gender = 'female';
console.log(animal.gender); //'female'
console.log(animal.gender = null) //undifined, bo jest instancja(czyli sam w sobie ma wartosc null)
console.log(animal.hasOwnproperty('gender'));//czyli jednak mozna ja wykryc
//wylicznie
var obj = {
  string: 'abc',
};

for(var property in obj) {
  console.log(property); //nazwa wlasciwowsci
  console.log(obj[property]); //wartosc wlasciwosci
}
//_proto_ nie bedzie wyjustowane poniewaz [[Enumerable]] jest ustawione na false
console.log(Object.keys(obj));
console.log(property.propertyIsEnumerable('_proto'));
//setter i getter
wlasciwosci danych-wartosci wlasciwowsci, np.car model(wlasciwosc danych. a move car wlasciwosc danych)
var person = {
  _name: 'Marcin'; //_oznacza prywatny tryb, nie bedzie widoczne
  get name() {
  //get musi zwrocic wartosc
    console.log("Hello %s", this.name); //-kompilattor wezmie pierwsza zmienna po %, Hello Marcin
    console.log("Hello"${this._name}~); //jako kolejny zmienny, Marcin
    return this._name;
  },
  //musi dosrac argument
  set name(value) {
    console.log('Zmiana wartosci %s', value);//Zmiana wartosci Zosia
    this._name = value;
  }
};

console.log(person.name);

person.name = 'Zosia'; //Hello Zosia
console.log(person.name) //Zosia
//atrybuty wspolne
 [[Enumerable]]
 [[Configuarble]]
// do zniany tych własciwości używamy metody Object.defineProperty()
var person = {
  name: 'Ula'
};

console.log(person.propertyIsEnumerable('name')); //true


Object.defineProperty(person, 'name', {
  enumerable: false
});

console.log(person.propertyIsEnumerable('name')); //false
/zamiast configurable --nie mozna zmienic
(funtion() {
  var person = {
    name: 'Ula'
  };

  Object.defineProperty(person, 'name', {
    enumerable: false
  });

  Object.defineProperty(person, 'name', {
    enumerable: false
  });
  console.log(person.propertyIsEnumerable('name'));

  Object.defineProperty(person, 'name', {
    configurable: true
  });
})()-od razu sie cos bedzie wypluwac po zalogowaniu strony
 [[Value]]-przechowuje wartosci [[Writable]]-flaga,czy do tej wlasciwosci mozna wpisac wartosci

 (function()  {
   'use strict'
   var person = {
     name: 'Kondrad'
   };
 })();

//IIFE
var person person = {};
Object.defineProperty(person, 'name', {
  value: 'Paweł',
  enumerable: true,
  configurable: true,
  writable: true
}));
//object.seal(
//extensible i condigurable ustawia na false
(function()  {
  'use strict'
  var person = {
    name: 'person'
  };

  console.log(Object.isExtensible(person));//true
  console.log(Object.isSeald(person));//false

  Object.seal(person);
  console.log(Object.isExtensible(person));//false
  console.log(Object.isSeald(person));//true
  person.sayHello = function () {
    console.log(this.name);
  };
  //sprawdzimy istnienie metody
  console.log('sayHello' in person) //false

person.naume = 'abcd';
console.log(person.name); // 'person'
})();
//zamrazanie objektu
//Object.freeze();-po wykonaniu nie mozna dodawac ani usuwac wlasciwosci
(function()  {
  'use strict'
  var person = {
    name: 'Kondrad'
  };

  console.log(Object.isExtensible(person)); //true
  console.log(Object.isFrozen(person)); //false

  Object.freeze(person);
  console.log(Object.isFrozen(person)); //true
  person.sayGoodbye = function () {
    console.log('Say goodbye' + this.name)
  }
  console.log('sayGoodbye' in person); //false

  person.name = 'Piotr';
  console.log(person.name);

  delete person.name;
  console.log('name' in person)
})();
//konstruktory i protypy
//konstruktory-function,array,object,date, duza litera=klasa
function Computer() {
  //
}

//new zraca wartość
var computer1 = new Computer;
var computer2 = new Computer;

//instancje klasy
console.log(computer1.constructor === Computer); //true

function Person(name) {
  this.bame = name; //bez referencji this
  this.sayHello = function () {
console.log('facebook');
}
}
var person1 = new Person('Piotr');
var person2 = new Person('Kondrad');

console.log(person1.name); //'Piotr'

(function() {
  "use strict";

  function Car(name) {
    Object.defineProperty(this. 'name', {
      get: function () {
        return name
      } //getter zawsze cos zwraca
      set: function (value) {
        name = value;
      } //setter musi przyjac jakas wartosc (value)
    })

    this.brrrum = function () {
      console.log("Bruuuummmm")
    }
  }
  var car1 = new Car('Szybki');
  car1.brrrum(); //"Bruuuummmm"
})();
//manualne
//atrybut-name, np.Piotr
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log('Hello %s1', this.name)
};

var person1 = new Person('Ula');
var person2 = new Person('Maria');

console.log(person1.name, person2.name);
person1.sayHello();
person2.sayHello();
//
(function() {
function Person(name) {
  this.name = name;
}
Person.prototype.arrPerson = [];

var person1 = new Person('Ula');
var person2 = new Person('Maria');

person1.arrPerson.push('czerwony');
person2.arrPerson.push('niebieski');

console.log(person1.arrPerson); //['czerwony','niebieski']
console.log(person2.arrPerson); //['czerwony','niebieski']
});


(function() {
  function Person(name) {
    this.name = name;
  }
//definiowanie wielu metod naraz w prototypie
Person.prototype = {
  sayHello: function () {
    // adads
  },
  toString: function() {
    //dsfv
  }
}
//w prototypie piszemy zeby np. ksiazki sie wyswietlaly dla wszytskich
sumUp =
person1.sumUp
person2.sumUp.
})();
//
(function () {
  function Person(name) {
  this.name = name;
}

var person1 = new Person('Zosia');
var person2 = new Person('Tosia');

Object.freeze(person1);

Person.protype.sayHi = function() {
  console.log('Hi');
}

person1.sayHi(); // 'Hi'
person2.sayHi(); // 'Hi', ale jesli dopiszemy 'xxsxjskn' to zadziala
})();
//zsumowanie tablicy, reduce zastepuje loopa
//this biezacy kontekst, przy wywolywaniu metody
Array.prototype.sumUp = function () {
  return.this.reduce(function(acc, val) {
    return acc + val;
  }, 0)
};

var numers = [1, 2, 3, 4, 5, 6, 7];
var result = numbers.sumUp();
sumUp(a, b);

//funkcja tablicy numerow,powtorzyc numery, zsumowanie niepowtarzajacych sie liczb

array = [1, 1, 39, 4, 2, 4, 4, 7, 5];

function(a, b){
  return a + b;
}
function numbersSum(array) {
  var a = [];
  for i = 0; i < array.lenght; i++ {
    if(a.indexOf(array[i]) === -1) {
      a.push(array[i]);
    }
  }
  //logika
  return a.reduce(add, 0);
}
// function countVowels(string)
function accumulator(str) {
  var response = [];
  for (var i=0; i<str.lenght; i++ {
    var wordish = ''; //2 petla, za kazdym razem loopowala po
    for(var j=0; j< i +1; j++ {
      wordish += j===0 ? str[i].toUpperCase() ; str[i].toLowerCase();
    }
  response.push(wordish);
  return response.join('-');
}

function accumulator(str) {
	return string.toLowerCase().split('').reduce(function (sum, i) {
		return (i =='a' || i == 'b' || i == 'c' || i == 'd') ? sum += 1 : sum;
	}, 0)
}

console.log(countVowels('abcd')) // ===> 2
console.log(countVowels('Mohamed Hayibor')) // ===> 6 ;)

accumulator("abcd"); //A-Bb-Ccc-Dddd
accumulator("RqaEzty"); //R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyy
accumulator("cwAt"); //C-Ww-Aaa-Tttt

//
function pinValidator(str)  {
  return *\d(4)$/g test(str)
}

pinValidator("abcs"); //false
pinValidator("b232"); //false
pinValidator("234"); //false
pinValidator("23243"); //false

function validatePIN (pin) {
  //return true or false

if (pin.match(/^\d{4}$|^\d{6}$/) && (pin.length == 4 || pin.length == 6)){
console.log(true);
}

else {
console.log(false);
}
...
function sortString(arr) {
    return arr;
}

var arr = ['fdhjhsd','dasd','vhsadsvc','xsasax'];
numArray.sort(sortNumber);
alert(numArray.join(","));
delete.
}
