/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(action, a, b) {
    this.action = action;
    this.a = a;
    this.b = b;
    this.getAction = function(){
      if(this.action == "sum"){
        action = a + b;
      } else if(this.action == "sub"){
        action = a - b;
      } else if(this.action == "multi"){
        action = a * b;
      } else if(this.action == "divis"){
        action = a / b;
      } else {
        alert('Wrong Input!')
      }
      return action;
    };
    
  }
  
  const newNums1 = new Calculator("sum", 5, 5);
  const newNums2 = new Calculator("sub", 8, 5);
  const newNums3 = new Calculator("multi", 3, 5);
  const newNums4 = new Calculator("divis", 24, 5);
  
  console.log(newNums1.getAction());
  console.log(newNums2.getAction());
  console.log(newNums3.getAction());
  console.log(newNums4.getAction());

  //DONE!
  

