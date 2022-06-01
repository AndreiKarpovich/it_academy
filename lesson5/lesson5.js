console.log(false + '2'); //false2
console.log(2 + true); //3
console.log('2' + 2); //22

console.log('string' * true); //NaN
console.log('string' * 5); //NaN
console.log(2 * true ); //2
console.log(2 * false ); //0

console.log('string' / true); //NaN
console.log('string' / 5); //NaN
console.log(2 / true ); //2
console.log(2 / false ); // Infinity

const number1 = Number(null);
console.log(number1); // 0
const number2 = Number(true);
console.log(number2); // 1
const number3 = Number('123');
console.log(number3); // 123

const string1 = String(123);
console.log(string1); // '123'
const string2 = String(true);
console.log(string2); // 'true'

const boolean1 = Boolean(123);
console.log(boolean1); // true
const boolean2 = Boolean(0);
console.log(boolean2); // false
const boolean3 = Boolean('123');
console.log(boolean3); // true
const boolean4 = Boolean(null)
console.log(boolean4); // false