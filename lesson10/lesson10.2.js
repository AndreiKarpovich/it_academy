//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Создайте async функцию, которая с помощью await будетдожидаться результата getNum, затем возводить его в квадрат и выводить на экран.
function getNum(){
    return new Promise(function(resolve, reject) {
         setTimeout(() => {
             let randomNum = Math.floor(Math.random() * (5 - 1 )+1);
             console.log(randomNum);
             resolve(randomNum);
        }, 3000);
        })
}


async function getSquaring() {
    let result = await getNum();
    console.log(Math.pow(result,2));
}

getSquaring()

