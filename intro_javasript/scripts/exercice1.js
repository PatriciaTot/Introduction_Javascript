'use strict';

// une liste pour des tests
const numbers = [2, 3, 5, 4, 10, 6];

/********** EXERCICE 0 ***********************/

console.log(` *** EXERCICE 0 *** `);
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;

console.log(`example(2) : ${example(2)}`);
console.log(`example(5) : ${example(5)}`);

numbers.forEach( (elt, i, array) => console.log(`element(${i}/${array.length}) --> ${elt}`) );

/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );
// tests
console.log(`example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);
/*********************************************/
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }];

console.log(persons[1].name);

persons.forEach( person => console.log(`${person.name} a ${person.age}`) );

const myForEach = (liste,func) => {
  for (let i in liste) {
    func(liste[i], i, liste);
    }
}

myForEach(persons, person => console.log(`${person.name} a ${person.age} ans`));
/*********************************************/


/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);

const numbers10 = numbers.map( elt => elt * 10 );
console.log(...numbers10);

const multiples = (n,liste) => liste.map( elt => elt * n);
console.log(`mutiples 10 : ${multiples(10, numbers)}`);

const multiples5 = liste => multiples(5,liste);
console.log(`multiples 5 : ${multiples5(numbers)}`);

const multiplesFactory = factor => liste => multiples(factor,liste);
const multiples100 = multiplesFactory(100);
console.log(typeof(multiples100));
console.log(`mutiples factory 100 : ${multiples100(numbers)}`);

/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);

const capitalize = chaine => chaine[0].toUpperCase() + chaine.substring(1);
console.log(capitalize('Timoleon'));

console.log(`capitalize : ${persons.map(person => capitalize(person.name))}`);

const myMap = (liste,func) => {
  const result = [];
  for(let i in liste) {
    result.push(func(liste[i], i, liste));
  }
  return result;
}

console.log(`mymap : ${myMap(persons, person => capitalize(person.name))}`);

/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);

const numbersInf5 = numbers.filter( elt => elt < 5 );
console.log(`nombres inférieurs à 5 : ${numbersInf5}`);

const createAcronym = phrase => phrase.split(' ').filter(elt => elt.length > 3).map(elt => capitalize(elt[0])).join('');

console.log(`acronyme : ${createAcronym('formations en informatique de lille')}`);

console.log(`acronyme : ${createAcronym('société nationale des chemins de fer français')}`);


/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);

const nbLetters = phrase => phrase.split(' ').reduce((previous,element )  =>  previous + element.length,0);
const FIL = "Formations en Informatique de Lille";
console.log(`FIL a ${nbLetters(FIL)} lettres`);

const max = (x,y) => x>y? x : y;

console.log(`max de 2 et 3 : ${max(2,3)}`);

const maxNumber = liste => liste.reduce((previous,element) => max(previous,element));
console.log(`Le maximum de numbers est ${maxNumber(numbers)}`);

console.log(`Le max de 3, 7 et 4 est ${Math.max(3, 7, 4)}`);

const maxNumber2 = liste => Math.max(...liste);
console.log(`maxNumber2 : Le maximum de numbers est ${maxNumber2(numbers)}`);

const sum = (...args) => args.reduce((previous,element) => previous + element,0);
console.log(`sum() : ${sum()}`);

console.log(`sum(1,2) : ${sum(1,2)}`);

console.log(`sum(1,2,3,4,5) : ${sum(1,2,3,4,5)}`);

console.log(`somme des nombres du tableau numbers : ${sum(...numbers)}`);

/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];

const participants = (invites,reponses) => {
  const reponsesNon = reponses.filter( reponse => reponse.present === 'non' ).map( reponse => reponse.nom );
  return invites.filter( nom => ! reponsesNon.includes(nom));
};

console.log(` participants : ${participants(lesInvites, lesReponses)}`);
/*********************************************/

/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);

/*********************************************/

/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);



/*********************************************/
