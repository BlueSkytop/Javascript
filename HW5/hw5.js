function hrFn(color='black') {
    document.write(`<hr style="border: 3px solid ${color}">`)
}

// 1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calc = (a, b) =>  a * b;
console.log(calc(20,10));

// 2. створити функцію яка обчислює та повертає площу кола з радіусом r
const calc2 = r => Math.PI * r * r;
console.log(calc2 (4));

// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder =  (r, h) => (2 * Math.PI * r * r)+(2 * Math.PI * r * h);
console.log(cylinder(10, 50));

// 4. створити функцію яка приймає масив та виводить кожен його елемент
const foods = arr => {
    for (const item of arr) {
        console.log('назва: ',item);
    }
}
foods(['popcorn', 'pizza', 'cake', 'spaghetti', 'sauce']);

// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
const pCreator = text => {
    document.write(`<b><p class="text1">${text}</p></b>`)
}
pCreator(' Функції — це головні “будівельні блоки” програми.')

hrFn('green');
// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulCreator = text => {
    document.write(`<ul>`);
    for (let i=0;  i<3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
ulCreator('coca-cola');
ulCreator('fanta');

hrFn('blue');
// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ulCreator2 = (text, count) => {
    document.write(`<ul class="block2">`);
    for(let i=0; i<count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
ulCreator2('one text', 2);
ulCreator2('two text', 4);

hrFn('purple');
// 8.створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const ulCreator3 = arr => {
    document.write(`<ul class="block3">`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
ulCreator3 (['ups', 'asd', 258, true, false]);

hrFn('purple');
// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
//'Для кожного об'єкту окремий блок.
const users = [
    {id:1, name:'vasya', age:25 },
    {id:2, name:'ira', age:18 },
    {id:3, name:'eva', age:36 },
    {id:4, name:'ostap', age:41 },
    {id:5, name:'orest', age:28 },
];

const userlist = arr => {
    for (const user of arr) {
        document.write
        (`
          <div class="block4">
            <p>id:${user.id}</p>
            <p>name:${user.name}</p>
            <p>age:${user.age}</p>
          </div>
        `);
    }
}
userlist(users);

hrFn('grey');
const smallestNumber = arrayNumbers => {
    let min = arrayNumbers[0];
    for (let i = 1; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] < min) {
            min = arrayNumbers[i];
        }
    }
    return min;
}
let myArray = [5, 3, 9, 2, 7];
let smallest = smallestNumber(myArray);
console.log("The min number is:", smallest);


// 10. створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//    Приклад sum([1,2,10]) //->13

hrFn('black');
const sum = arrOfNums => {
    let result = 0;
    for (let i = 0; i<arrOfNums.length; i++) {
        result=result+arrOfNums[i];
    }
    return result;
}
console.log('sum: ', sum([1, -4, 7]));

hrFn('orange');
// 11. створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    const numIndex1 = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = numIndex1;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));

// 12. Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sum, currencies) => {
    for (const cur of currencies) {
        return sum/cur.value
    }
}
const result = exchange(10000,[{currency:'USD',value:40}, {currency:'EUR',value:42}]);
console.log('result: ', result);