/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
function Movie (title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = function(){
        if(this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    };
}

const movie1 = new Movie ('Avatar', 'James Cameron', 237000000);
const movie2 = new Movie ('Aladin', 'GajusRicis', 83000000);



console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());

//DONE!