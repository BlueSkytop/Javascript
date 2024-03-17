/* 1. Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
    та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом*/
let f1 = document.forms.formRegistration;

f1.onsubmit = function (ev) {
    ev.preventDefault();
    let user = {name: this.name.value}

    const block = document.createElement('div');
    const name = document.createElement('div');
    const surname = document.createElement('div');
    const age = document.createElement('div');

    name.innerText = this.name.value;
    surname.innerText = this.surname.value;
    age.innerText = this.age.value;

    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';

    block.append(name, surname, age);
    document.body.appendChild(block);
}

    /*-------------------------------------------------------------------------------------------
    2. сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1*/
          const number= localStorage.getItem('number') || 0;
          const block = document.getElementById('number');
          const newNumber = (+number + 1).toString();

          block.innerText = newNumber;

          localStorage.setItem('number', newNumber);

   /* ----------------------------------------------------------------------------------------------
    3. Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
    в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
    при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
    а побудувати дом структуру під кожну сессію*/

         const now = new Date();
         const visitInfo = {
            dateTime: now.toLocaleString()
             };
         let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
         sessions.push(visitInfo);
         localStorage.setItem('sessions', JSON.stringify(sessions));


const sessions2 = JSON.parse(localStorage.getItem('sessions')) || [];

// Build structure for each session and append to sessionInfo container
const sessionInfoContainer = document.getElementById('sessionInfo');
sessions2.forEach(session => {
    const sessionDiv = document.createElement('div');
    sessionDiv.textContent = `Visit Date & Time: ${session.dateTime}`;
    sessionInfoContainer.appendChild(sessionDiv);
});

/*-------------------------------------------------------------------------------------------------------
 4.зробити масив на 100 об'єктів та дві кнопки prev next
 при завантажені сторінки з'являються перші 10 об'єктів.
                                                  При натисканні next виводяться настпні 10 об'єктів
 При натисканні prev виводяться попередні 10 об'єктів*/
function generateObjectsArray() {
    const objects = [];
    for (let i = 1; i <= 100; i++) {
        objects.push({ id: i, data: `Object ${i}` });
    }
    return objects;
}

function displayObjects(pageNumber) {
    const objectsPerPage = 10;
    const startIndex = (pageNumber - 1) * objectsPerPage;
    const endIndex = pageNumber * objectsPerPage;
    const objectsToDisplay = objects.slice(startIndex, endIndex);
    const objectContainer = document.getElementById('objectContainer');
    objectContainer.innerHTML = '';
    objectsToDisplay.forEach(obj => {
        const div = document.createElement('div');
        div.textContent = `${obj.id}: ${obj.data}`;
        objectContainer.appendChild(div);
    });
}

const objects = generateObjectsArray();
let currentPage = 1;
const totalPageCount = Math.ceil(objects.length / 10);


displayObjects(currentPage);

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentPage < totalPageCount) {
        currentPage++;
        displayObjects(currentPage);
    }
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayObjects(currentPage);
    }
});



 /*--------------------------------------------------------------------------------------------
  5.Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
                                     щоб при натисканні на кнопку зникав елемент з id="text".*/
const p = document.createElement('p');
const btn = document.createElement('button');

p.classList.add('pStyle');
btn.classList.add('btnStyle');

p.innerText = 'Text';
btn.innerText = 'Click';

document.body.append(p, btn);
let flag = true;
btn.addEventListener('click', (e) => {
    if(flag) {
        p.style.display = 'none';
    }else{
        p.style.display = 'block';
    }
    flag = !flag;
})

/*----------------------------------------------------------------------------------------------------------
6.створити інпут який приймає вік людини та кнопку яка підтверджує дію.
   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача                                                                                                                                                               *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
 При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
 (Додатковачастина для завдання)*/
function checkAge() {
    // Get the value from the age input field
    const ageInput = document.getElementById('ageInput').value;

    // Convert the input value to a number
    const age = parseInt(ageInput);

    // Check if the age is less than 18
    if (age < 18) {
        // Display a message if the age is less than 18
        document.getElementById('ageMessage').textContent = 'You are under 18 years old.';
    } else {
        // Display a message if the age is 18 or older
        document.getElementById('ageMessage').textContent = 'You are 18 years old or older.';
    }
}

 /*
 *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
 при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.При перезавантаженні,
 яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається*/
const moneyValueElement = document.getElementById('moneyValue');
let moneyValue = parseInt(moneyValueElement.textContent);

moneyValue += 10;

moneyValueElement.textContent = moneyValue + '  грн';