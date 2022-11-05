const numberFormatter = new Intl.NumberFormat();

dataPays.forEach( pays => pays.toString = function() { return `${this.nom} : ${this.population} hab., ${this.superficie}km², ${this.PIB} milliardsUS$` } );

for (let i = 0 ; i < 5; i++) {
  console.log(`${dataPays[i]}`);
}

/****  QUESTION 2 *****/
console.log(' *** QUESTION 2 ***');

const populationTotale = dataPays.reduce((previous,element) => previous + element.population, 0 );;

console.log(`population totale : ${numberFormatter.format(populationTotale)}`);
/***********************/


/****  QUESTION 3 *****/
console.log(' *** QUESTION 3 ***');

const findData = nom => dataPays.find(pays => pays.nom === nom );
console.log(`France : ${findData('France')}`);

/***********************/


/****  QUESTION 4 *****/

const dixpluspeuples = dataPays.sort((pays1,pays2) => pays2.population - pays1.population).slice(0,10).map(pays => pays.nom )

console.log(`10 plus peuplés : ${dixpluspeuples}`);

/***********************/


/****  QUESTION 5 *****/


/***********************/


/****  QUESTION 6 *****/



/***********************/
