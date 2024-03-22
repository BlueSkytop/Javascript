/* - зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
  вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)*/


const URL = 'http://jsonplaceholder.typicode.com/users';

function usersAll(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            usersFn(data);
        })
}
usersAll(URL)

function usersFn(individs) {
    let container = document.getElementById('usersBlock');
    console.log(container);
    container.innerHTML = '';

    for (const individ of individs) {
      let divForUser = document.createElement('div');
      divForUser.classList.add('styleUser');

      let h5 = document.createElement('h5');
      h5.innerText = `${individ.id}. ${individ.name}`;

      h5.addEventListener('click', ()=>{
          location.href = 'users-details.html?id='+ individ.id
      })

      divForUser.append(h5);
      container.appendChild(divForUser);
    }
}