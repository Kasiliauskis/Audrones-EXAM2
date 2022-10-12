/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'cars.json';

async function cars() {
    const ENDPOINT = 'cars.json'; 
    const request = new Request(ENDPOINT);

    const response = await fetch(request);
    const superCars = await response.json();

    cardOfCar(superCars);
}

function cardOfCar(obj) {
  
    const output = document.querySelector('#output');


    for (const brand1 of obj) {
        const myArticle = document.createElement('article');
        const made = document.createElement('h2');
        const myList = document.createElement('ul');
    
        made.textContent = brand1.brand;
    
        const carModels = brand1.models;

        for (const model of carModels) {
          const listItem = document.createElement('li');
          listItem.textContent = model;
          myList.appendChild(listItem);
        }
    
        myArticle.appendChild(made);
        myArticle.appendChild(myList);
    
        output.appendChild(myArticle);

    }

}

cars()

//DONE!



