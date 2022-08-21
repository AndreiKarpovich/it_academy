//1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
//2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person, который будет соответствовать массиву
import { TupleType } from "typescript";

interface User{
    type: 'user';
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
    
};
interface Admin{
    type: "admin";
    name: string;
    age: number;
    role: string;
};

type Person = User | Admin;

const users: User[] = [
    {   
        type: "user",
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {   
        type: "user",
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];


const admin: Admin[] = [
   
    {   
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    
    {   
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];


//3. Напишите анотации типов к этому классу.
/**
 * 
 */

export class ObjectManipulator<T> {
    constructor(protected obj: T) {
      this.obj = obj;
    }
    /**
     * 
     * @param {K}key 
     * @param {V} value 
     * @returns {ObjectManipulator}
     */

    public set<K extends string, V>(
      key: K,
      value: V
    ): ObjectManipulator<T & { [k in K]: V }> {
      return new ObjectManipulator({
        ...this.obj,
        [key]: value,
      }) as ObjectManipulator<T & { [k in K]: V }>;
    }
  /**
   * 
   * @param {K} key 
   * @returns {T} 
   */
  
    public get<K extends keyof T>(key: K): T[K] {
      return this.obj[key];
    }
  /**
   * 
   * @param {K} key 
   * @returns {ObjectManipulator}
   */
    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
      const newObj = { ...this.obj };
      delete newObj[key];
      return new ObjectManipulator(newObj);
    }
  /**
   * 
   * @returns {T} 
   */
    public getObject(): T {
      return this.obj;
    }
  }

  
//4. Обеспечьте правильную типизацию для указанных функций.

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
 export function map<T>(mapper: Function, input : T[] | any) : T[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]|any): T[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<T>(filterer: Function, input:T[] | any): T[] | Function {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]|any): T[] | Function  {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a:number, b:number): number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number): number | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}