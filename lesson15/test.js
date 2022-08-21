const {Calculator} = require('./calculator.js');

describe("Calculator", () => {
    const calculator = new Calculator();

    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });  
    test('adds 0 + 5 to equal 5', () => {
        expect(calculator.add(0, 5)).toBe(5);
    });
    test('adds "0" + "5"  to add() ', () => {
        expect(typeof calculator.add('0', '5')).toBe('number');       
    });
    test('adds strings to add() ', () => {
        expect(typeof calculator.add('Hello', 'World')).toBe(Error);       
    });


    test('multiply 1 * 2 to equal 2', () => {
        expect(calculator.multiply(1, 2)).toBe(2);
    });
    test('multiply 0 * 2 to equal 0', () => {
        expect(calculator.multiply(0, 2)).toBe(0);
    }); 
    test('multiply strings to equal number', () => {
        expect(typeof calculator.multiply('1', '2')).toBe('number');
    });
    test('multiply 1 * 2 to equal 2', () => {
        expect(calculator.multiply('1', '2')).toBe(2);
    });
    test('multiply strings', () => {
        expect(calculator.multiply('Hello', '2')).toBe(Error);
    });


    test('subtraction two number', () =>{
        expect(calculator.subtraction(5, 3)).toBe(2);
    });
    test('subtraction -5 and 3 equal -8', () =>{
        expect(calculator.subtraction(-5, 3)).toBe(-8);
    });
    test('subtraction two string with numner', () =>{
        expect(calculator.subtraction('5', '3')).toBe(2);
    });
    test('subtraction two string', () =>{                   ///
        expect(calculator.subtraction('Hello', 'o')).toBe(Error);
    });

    test('divide 6 and 2 equal 3', () =>{
        expect(calculator.divide(6,2)).toBe(3)
    });
    test("divide '6' and '2' equal 3", () =>{
        expect(calculator.divide('6','2')).toBe(3)
    });
    test('divide -6 and 2 equal -3', () =>{
        expect(calculator.divide(-6,2)).toBe(-3)
    });
    test('divide two string', () =>{                   ///
        expect(calculator.subtraction('Hello', 'o')).toBe(Error);
    });
    

    test('exponentiation 6 to equal 36', () =>{
        expect(calculator.exponentiation(6)).toBe(36)
    });
    test("exponentiation '6' equal 36", () =>{
        expect(calculator.exponentiation('6',)).toBe(36)
    });
    test('exponentiation -6 equal 36', () =>{
        expect(calculator.exponentiation(-6)).toBe(36)
    });
    test('dexponentiation two string', () =>{                   ///
        expect(calculator.exponentiation('Hello', 'o')).toBe(Error);
    });
    
});
