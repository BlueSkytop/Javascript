/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
let users = [
    'Ostap', 'Maks', 'Lyuba', 'Muron', 'Ira', 'Nazar', 'Petro', 'Anya', 'Romana', 'Vika'
];
console.log(users);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre*/
let book_1 = {
    name: 'Історія України',
    pageCount: 250,
    genre: 'history'
}
let book_2 = {
    name: 'Iron Flame',
    pageCount: 640,
    genre: 'adventures'
}
let book_3 = {
    name: 'Fractal Noise: A Fractalverse Novel',
    pageCount: 265,
    genre: 'fantasy'
}
console.log(book_1, book_2, book_3);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
    Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
let book_4 = {
    title: 'The Secret History',
    pageCount: 640,
    genre: 'modern classic',
    author:
        [{
            name:  'Tartt Donna',
            age: 45,
        }]
}

let book_5 = {
    title: 'Beach Read',
    pageCount: 368,
    genre: 'love prose',
    author:
        [{
            name:  ' Emily Henry',
            age: 38,
        }]
}

let book_6 = {
    title: 'Bauhaus',
    pageCount: 96,
    genre: 'Design',
    authors:
        [{
            name:  ' Magdalena Droste',
            age: 40,
            name2: 'Peter Gossel',
            age2: 48,
        }]
}
console.log(book_4, book_5, book_6);


/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
Вивести в консоль пароль кожного користувача*/
let users_2 = [
    {name: 'Veronika', username:'nika', password:12345},
    {name: 'Vasya', username:'124', password:123467},
    {name: 'Ira', username:'ira25', password:123489},
    {name: 'Olena', username:'O58', password:1234564},
    {name: 'Eva', username:'h589', password:12895},
    {name: 'Yana', username:'Yana21', password:128525},
    {name: 'Oleg', username:'Oleg64', password:1285965},
    {name: 'Petro', username:'hdgs', password:151445},
    {name: 'Mariya', username:'Mar1', password:185215},
    {name: 'Svitlana', username:'svit22', password:12352852},
]

console.log(users_2[0].password);
console.log(users_2[1].password);
console.log(users_2[2].password);
console.log(users_2[3].password);
console.log(users_2[4].password);
console.log(users_2[5].password);
console.log(users_2[6].password);
console.log(users_2[7].password);
console.log(users_2[8].password);
console.log(users_2[9].password);

/*Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
let x = 10;
if (x > 0) {
    console.log('вірно');
}else{
    console.log('невірно');
}

let a = 1;
if (a==1 || a==0 || a==-3) {
    console.log('вірно');
}else{
    console.log('невірно');
}

/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
let time = prompt('Напиши число і дізнайся, яка це четверть години');
if (time >= 0 && time <= 14){
    console.log('1');
}
if (time >= 15 && time <= 29){
    console.log('2');
}
if (time >= 30 && time <= 44){
    console.log('3');
}
if (time >=45 && time <= 59){
    console.log('4');
}

/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
місяця потрапляє це число (у першу, другу чи третю).*/
let day = prompt('Визначити декаду')
if (day >= 0 && day <= 10){
    console.log('1');
}
if (day >= 11 && day <= 20){
    console.log('2');
}
if (day >= 21 && day <= 31){
    console.log('3');
}

/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    - Користувач вводить або має два числа.*/
let plan = prompt('План на тиждень');
switch (plan) {
    case '1':
        console.log('вигуляти пса, почитати книгу');
        break;

    case '2':
        console.log('прослухати ще раз лекцію');
        break;

    case '3':
        console.log('зробити домашку');
        break;

    case '4':
        console.log('підлити квіти');
        break;

    case '5':
        console.log('подивитись фільм англіською');
        break;

    case '6':
        console.log('закупитись харчами, поприбирати вдома');
        break;

    case '7':
        console.log('поїхати на природу');
        break;

    default:
        console.log('помилка, потрібно ввести цифру');
}

/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/
let number = +prompt('напиши перше число');
let number2 = +prompt('напиши друге число');
if(number > number2){
    console.log(number);
}
if(number2 > number){
    console.log(number2)
}
if(number === number2){
    console.log('напиши різні числа')
}

/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється false
(хибноподібні, тобто приводиться до false)*/
let x1 = prompt('write start');
if(x1 !== 'start' || 'start' === 'START') {
    console.log('default');
}else {
    console.log('молодець');
}

/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
    За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray => 5) {
    console.log('super');
}else {
    console.log('short course');
}
