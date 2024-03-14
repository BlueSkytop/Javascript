/* 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
 function User (id, name, surname , email, phone) {
     this.id = id;
     this.name = name;
     this.surname = surname;
     this.email = email;
     this.phone = phone
 }
 let users = [
     new User(1, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(2, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(3, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(4, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(5, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(6, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(7, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(8, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(9, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416),
     new User(10, 'oleh', 'petrov', 'mmdjf@mail.com', +380956257416)
 ];
console.log(users);

/* 2.Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
let twinUser = users.filter(user => user.id % 2 === 0);
console.log(twinUser);

/* 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
let userSort = users.sort((a, b) => a.id - b.id);
console.log(userSort);


/* 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890', ['Product1', 'Product2']),
    new Client(2, 'Emma', 'Smith', 'emma.smith@example.com', '+9876543210', ['Product3', 'Product4']),
    new Client(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '+1357924680', ['Product5', 'Product6']),
    new Client(4, 'Bob', 'Williams', 'bob.williams@example.com', '+2468013579', ['Product7', 'Product8']),
    new Client(5, 'Sophia', 'Brown', 'sophia.brown@example.com', '+3692581470', ['Product9', 'Product10']),
    new Client(6, 'Michael', 'Wilson', 'michael.wilson@example.com', '+7531902468', ['Product11', 'Product12']),
    new Client(7, 'Olivia', 'Martinez', 'olivia.martinez@example.com', '+4806139725', ['Product13', 'Product14']),
    new Client(8, 'William', 'Taylor', 'william.taylor@example.com', '+9024681357', ['Product15', 'Product16']),
    new Client(9, 'Sophie', 'Anderson', 'sophie.anderson@example.com', '+3579012468', ['Product17', 'Product18']),
    new Client(10, 'Daniel', 'Garcia', 'daniel.garcia@example.com', '+4680135792', ['Product19', 'Product20'])
];

console.log(clients);


/* 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
let productSort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(productSort);

/* 6. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null;

    this.drive = function() {
        console.log(`We drive at the speed of ${this.maxSpeed} per hour.`);
    };

    this.info = function() {
        console.log(`Model - ${this.model}`);
        console.log(`Manufacturer - ${this.manufacturer}`);
        console.log(`Year of Manufacture - ${this.year}`);
        console.log(`Maximum Speed - ${this.maxSpeed}`);
        console.log(`Engine Volume - ${this.engineVolume}`);
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Maximum speed increased to ${this.maxSpeed}.`);
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(`Year of manufacture changed to ${this.year}.`);
    };

    this.addDriver = function(driver) {
        this.driver = driver;
        console.log(`Driver added: ${JSON.stringify(driver)}`);
    };
}
let cars = new Car("Civic", "Honda", 2020, 180, "2.0L");
cars.drive(); // Output: We drive at the speed of 180 per hour.
cars.info(); // Output: Information about the car displayed in the specified format.
cars.increaseMaxSpeed(20); // Output: Maximum speed increased to 200.
cars.changeYear(2022); // Output: Year of manufacture changed to 2022.
cars.addDriver({ name: "John", age: 30, licenseNumber: "ABC123" }); // Output: Driver added: {"name":"John","age":30,"licenseNumber":"ABC123"}


/* 7. (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
 об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
class cars2 {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = null;
    }

    drive() {
        console.log(`We drive at the speed of ${this.maxSpeed} per hour.`);
    }

    info() {
        console.log(`Model - ${this.model}`);
        console.log(`Manufacturer - ${this.manufacturer}`);
        console.log(`Year of Manufacture - ${this.year}`);
        console.log(`Maximum Speed - ${this.maxSpeed}`);
        console.log(`Engine Capacity - ${this.engineCapacity}`);
        if (this.driver) {
            console.log(`Driver - ${JSON.stringify(this.driver)}`);
        } else {
            console.log("No driver assigned.");
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Maximum speed increased to ${this.maxSpeed}.`);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Year of manufacture changed to ${this.year}.`);
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(`Driver added: ${JSON.stringify(driver)}`);
    }
}
let carsClass = new cars2("Civic", "Honda", 2020, 180, "2.0L");
carsClass.drive(); // Output: We drive at the speed of 180 per hour.
carsClass.info(); // Output: Information about the car displayed in the specified format.
carsClass.increaseMaxSpeed(20); // Output: Maximum speed increased to 200.
carsClass.changeYear(2022); // Output: Year of manufacture changed to 2022.
carsClass.addDriver({ name: "John", age: 30, licenseNumber: "ABC123" }); // Output: Driver added: {"name":"John","age":30,"licenseNumber":"ABC123"}



/* 8.створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
class People{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends People{
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}

class Prince extends People{
    constructor(name, age, bootSize) {
        super(name, age);
        this.bootSize = bootSize;
    }
    findPrincess(arr) {
        for(const Cinderella of arr){
            if  (Cinderella.footSize === this.bootSize) {
                return Cinderella;
            }
        }
    }
}
let cinderellaArr = [
    new Cinderella ('Olya', 25 , 38 ),
    new Cinderella ('Lesya', 26 , 39 ),
    new Cinderella ('Katya', 24 , 37 ),
    new Cinderella ('Ira', 28 , 35 ),
    new Cinderella ('Lyuba',32  , 38 ),
    new Cinderella ('Eva',30  , 38 ),
    new Cinderella ('Oksana', 22 , 37.5 ),
    new Cinderella ('Orusya', 23 , 38.5 ),
    new Cinderella ('Adelya', 29 , 39 ),
    new Cinderella ('Tanya', 31 , 46 ),
];
let prince = new Prince('Sergey', 30, 46);
console.log(prince.findPrincess(cinderellaArr));
