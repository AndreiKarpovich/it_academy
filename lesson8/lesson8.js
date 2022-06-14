//1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

function reverseArr(arr){
    return console.log(arr.reverse());
}

reverseArr([1, 2, 3]) // [ 3, 2, 1 ]

let arr = Array(8, 9, 'dog', 'cat');
reverseArr(arr); // [ 'cat', 'dog', 9, 8 ]

//2) найти максимальное значение числа в массиве ([3,67,15...])

function findMax(arr){
    return console.log(Math.max.apply(null, arr));
}
let arr2 = Array(4,90, 15, 32, 65, 71, 11);
findMax(arr2) // 90

//3) записать в массив ряд фибоначи начиная с N члена с длинной массива M

function createFibonachiNumber(n, m){
    let a = 1;
    let b = 1;
    let l =  Array();
    while (l.length < m+1){
        for (let i = 4; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        }
        l.push(b)
    a = 1;
    b = 1;  
    n = n + 1;       
    }
    
    return console.log(l.splice(1));
}
createFibonachiNumber(8, 5) //[ 21, 34, 55, 89, 144 ]

//4) даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 3 )
function compareNumber(n1, n2){
    let arr1 = n1.toString().split("");
    let arr2 = n2.toString().split("");
    let cache;
    let c = 0;
    let cc = 0;
    for (let i = 0; i < arr1.length; ++i){
        cache = arr1[i];
        for (var j = 0; j < arr2.length; ++j){
            if (cache == arr2[j]){
            ++c;
            }
        }
    
    }
    
    for (let i = 0; i < arr1.length; ++i){
        if(arr1[i] == arr2[i]){
            ++cc;
        }
    } 
return console.log(cc, '- by index and value,' ,c, '- by value');
}
compareNumber(1234, 1354) // 2 - by index and value, 3 - by value

//5) сортировка массива по возрастанию/убыванию

function sortArr(arr){
    console.log(arr.sort((a,b) => a - b));
}
sortArr(arr2); //[  4, 11, 15, 32, 65, 71, 90 ]

//6) удалить из массива все повторяющиеся элементы 

function setArr(arr){
    let setarr = new Set(arr);
    return console.log(Array.from(setarr));
}
let arr3 = Array(1, "cat", 5, "cat", 8, 5);
setArr(arr3) //[ 1, 'cat', 5, 8 ]
