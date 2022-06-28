//Решить используя промисы и async/await
//Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandom(){
    return Math.floor(Math.random() * (5 - 1 )+1);
}

function getProm(num){
    return new Promise((resolve, redject) =>
    {
        let timeout = getRandom();
        setTimeout(() =>{
            resolve(num)   
        }, timeout*1000)
    });
}

let one = getProm(1);
let two = getProm(2);
let three = getProm(3);

Promise.race([one, two, three]).then(data =>{
    console.log(data)
})


async function getProm1(){
    let res = await [one, two, three];
}
Promise.race([one, two, three]).then(res =>{
    console.log(res)
})



