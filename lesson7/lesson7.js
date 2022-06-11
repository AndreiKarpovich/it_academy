// 1) Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

let sum1 = 0;
let sum2 = 0;

function rollDice(min, max) {
    let roll1 = Math.floor( Math.random() * max ) + min;
    console.log('First player roll', roll1);
    let roll2 = Math.floor( Math.random() * max ) + min;
    console.log('Second player roll', roll2);
    sum1 = sum1 + roll1;
    sum2 = sum2 + roll2;
    console.log('Score:', sum1, '-', sum2 );
}

rollDice(1, 6)
rollDice(1, 6)
rollDice(1, 6)

if(sum1 > sum2){
    console.log('First player win!');
} else if(sum2 > sum1){
    console.log('Second player win!');
} else{
    console.log('Draw!');
}

//2) Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня.

function getFridaysThe13(year, mounth, day){
    let start = new Date(year, mounth, day);
    let finish = new Date();
    let counter = 0;
    while (finish > start){
        if (start.getDay() == 5 && start.getDate() == 13){
            counter++;
        }
            start.setDate(start.getDate() + 1);
    }
    console.log(counter, 'FridaysThe13');
}
getFridaysThe13(2000, 1, 1);

//3) Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)

//а) числа изначальное число целое, числа разбивки - целые (4,6,5)

function getNumbers(min, max, itter){
    let arr = [];
    let i = 1;
        while(i < itter){
            let number = Math.floor(Math.random() * (max - min)) + min;
            arr.push(number);
            max = max - number;
            i += 1;
        }
        arr.push(max);
        return console.log(arr)
}
getNumbers(1,80,3)

//б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
function getNumbers1(min, max, itter){
    let arr = [];
    let i = 1;
        while(i < itter){
            let number = Math.random() * (max - min) + min
            arr.push(Number(number.toFixed(2)));
            max = max - number;
            i += 1;
        }
        arr.push(Number(max.toFixed(2)));
        return console.log(arr)
}
getNumbers1(1,80,3)