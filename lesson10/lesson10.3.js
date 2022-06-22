//Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    };


    function getNum(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            let randomNum = getRandom(1, 6);
            console.log(randomNum);
            resolve(randomNum);
        }, 3000);
    });
};
        
function getNum1(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            let randomNum = getRandom(6, 11);
            console.log(randomNum);
            resolve(randomNum);
        }, 5000);
    })
};

async function getSumm(){
    let result1 = await getNum();
    let result2 = await getNum1();
    console.log(result1 + result2);
};

getSumm();