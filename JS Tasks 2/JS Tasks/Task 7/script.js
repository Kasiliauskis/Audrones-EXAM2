/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(_keys({make: 'audi', model: 'A6', year: '2005', color: 'white'}));

//DONE!




