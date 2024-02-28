//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    return a * b
}
console.log(calc(20,10));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function calc2(r) {
    return Math.PI * r * r;
}
console.log(calc2 (4));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r, h) {
    return(2 * Math.PI * r * r)+(2 * Math.PI * r * h);
}
console.log(cylinder(10, 50));

//- створити функцію яка приймає масив та виводить кожен його елемент
function foods(arr) {
    for (const item of arr) {
        console.log('item: ',  item);
    }
}
foods(['popcorn', 'pizza', 'cake', 'spaghetti', 'sauce']);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pCreator (text) {
    document.write(`<p>${text}</p>`)
}
pCreator(' Функції — це головні “будівельні блоки” програми.')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator (text) {
    document.write(`<ul>`);
    for (let i=0;  i<3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
ulCreator('coca-cola');
ulCreator('fanta');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator2 (text, count) {
    document.write(`<ul>`);
    for(let i=0; i<count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
ulCreator2('one text', 2);
ulCreator2('two text', 4);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function ulCreator3(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
ulCreator3 (['ups', 'asd', 258, true, false]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
//'Для кожного об'єкту окремий блок.
const users = [
    {id:1, name:'vasya', age:25 },
    {id:2, name:'ira', age:18 },
    {id:3, name:'eva', age:36 },
    {id:4, name:'ostap', age:41 },
    {id:5, name:'orest', age:28 },
];
function userlist(arr) {
    for (const user of arr) {
        document.write(`<div>
      <p>id:${user.id}</p>
      <p>name:${user.name}</p>
      <p>age:${user.age}</p>
</div>`);
    }
}
userlist(users);

//- створити функцію яка повертає найменьше число з масиву
//function minNumber(arrOfNums) {
//    let min = arrOfNums[0];
//   for (let i= 1; 1 < arrOfNums.length; i++ ) {
//       if (arrOfNums[i] < min) {
//            min = arrOfNums[i];
//        }
//   }
//    return min;
//}
//console.log('minNumber: ', minNumber([1,5,8,6,-10,-54]));


//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//    Приклад sum([1,2,10]) //->13
function sum(arrOfNums) {
    let result = 0;
    for (let i = 0; i<arrOfNums.length; i++) {
        result=result+arrOfNums[i];
    }
    return result;
}
console.log('sum: ', sum([1, -4, 7]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    const numIndex1 = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = numIndex1;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sum, currencies, resultCurrency) {
    for (const cur of currencies) {
        return sum/cur.value
    }
}
const result = exchange(10000,[{currency:'USD',value:40}, {currency:'EUR',value:42}], 'USD');
console.log('result: ', result);