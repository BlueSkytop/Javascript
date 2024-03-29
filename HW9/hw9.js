
/* 1.створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/
let block = document.createElement('div');

block.innerText = 'Встала весна, чорну землю сонну розбудила, уквітчала її рястом, барвінком укрила';

block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');

block.style.backgroundColor = 'green';
block.style.textColor = 'red';
block.style.fontSize = '14px';
console.log(block);

document.body.appendChild(block);
console.log(document.body);

let cloneBlock = block.cloneNode(true);
cloneBlock.style.backgroundColor = 'grey';
document.body.appendChild(cloneBlock);
console.log(cloneBlock);
/*---------------------------------------------*/
/* 2. Є масив:
    ['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/
let arr = ['Main','Products','About us','Contacts'];
let ulList = document.createElement('ul');
for (const name of  arr) {
    let li = document.createElement('li');
    li.innerText = name;
    ulList.appendChild(li);
}
document.body.appendChild(ulList);
/*------------------------------------------------*/
/* 3.Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const item of coursesAndDurationArray) {
    const blockCourses = document.createElement('div');
    blockCourses.innerText = `${item.title} - ${item.monthDuration}`;
    document.body.appendChild(blockCourses);
}
/*-------------------------------------------------------*/
/*    4. Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
 та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.*/
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = item.title;
    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText = item.monthDuration;

    div.append(h1, p);
    document.body.appendChild(div);
}
/*-------------------------------------------------*/
/* 5. є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
    Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту*/
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const familyMember of simpsons) {
    const divMember = document.createElement('div');
    divMember.classList.add('member');
    const h1Member = document.createElement('h1');
    h1Member.innerText = familyMember.name;
    const pMember = document.createElement('p');
    pMember.innerText = familyMember.age;
    const imageMember = document.createElement('img');
    imageMember.setAttribute('src', familyMember.photo);
    const iMember = document.createElement('i');
    iMember.innerText = familyMember.info;

    divMember.append(h1Member, pMember, imageMember, iMember);
    document.body.appendChild(divMember);
}
/*----------------------------------------------*/
  /*  6.Цикл в циклі
- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
 для властивості modules зробити список з елементами
Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
------------------*/
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesDiv = document.createElement('div');
document.body.appendChild(coursesDiv);
coursesDiv.classList.add('courses');
for (const coursesDivElement of coursesArray) {
    let coursesDiv2 = document.createElement('div')
    let coursesDivH2 = document.createElement('h2');

    let coursesDivMini = document.createElement('div');
    let coursesDivH4 = document.createElement('h4');
    let coursesDivH5 = document.createElement('h5');

    let coursesDivMini2 = document.createElement('div');
    let coursesTag = document.createElement('b');
    let coursesBlockA = document.createElement('div');
    let coursesBlockB = document.createElement('div');
    let coursesBlockC = document.createElement('div');
    let coursesDivUl = document.createElement('ul');


                            /**************************************/

    coursesDiv2.classList.add('div2');
    coursesDivH2.classList.add('titleClass');

    coursesDivMini.classList.add('divMini');
    coursesDivH4.classList.add('month');
    coursesDivH5.classList.add('hour');

    coursesDivMini2.classList.add('divMini2');
    coursesBlockA.classList.add('blockA');
    coursesBlockB.classList.add('blockB');
    coursesBlockC.classList.add('blockC');

                          /****************************************/

    coursesDivH2.innerText = `Title: ${coursesDivElement.title}`;
    coursesDivH4.innerText = `Month Duration: ${coursesDivElement.monthDuration}`;
    coursesDivH5.innerText = `Hour Duration: ${coursesDivElement.hourDuration}`;
    coursesTag.innerText = 'Modules:';
    coursesBlockA.innerText = 'html';
    coursesBlockB.innerText = 'css';
    coursesBlockC.innerText = 'js'

                        /*******************************************/
    coursesDiv2.append(coursesDivH2);
    coursesDiv.appendChild(coursesDiv2);

    coursesDivMini.append(coursesDivH4, coursesDivH5);
    coursesDiv2.appendChild(coursesDivMini);

    coursesDivMini2.append(coursesTag, coursesBlockA, coursesBlockB, coursesBlockC);
    coursesDiv2.appendChild(coursesDivMini2);

    for (const module of coursesDivElement.modules) {
        let divLi = document.createElement('li');
        divLi.innerText = module;
        coursesDivUl.append(divLi);
        coursesDivMini2.appendChild(coursesDivUl);
    }
}
