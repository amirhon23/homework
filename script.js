//1
let persons = [
    { name: "John", age: 25, city: "NewYork" },
    { name: "Alice", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alex", age: 19, city: "London" },
    { name: "Tyler", age: 24, city: "NewYork" },
    { name: "Constantine", age: 31, city: "Paris" },
    { name: "Cole", age: 21, city: "London" },
]

//

function findPersonsByCity(cityName) {
    return persons.filter(person => person.city.toLowerCase() === cityName.toLowerCase());
}

//

let cityName = prompt("Введите название города:");
let result = findPersonsByCity(cityName);

//консоль

console.log(result);

//2

function calculateAverageAge() {
    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    return totalAge / persons.length;
}

//

let averageAge = calculateAverageAge();

//консоль

console.log(`Средний возраст человека: ${averageAge}`);

//3

function addNewPerson(name, age, city) {
    persons.push({ name, age, city });
}

//

addNewPerson("Tom", 15, "America");

//консоль

console.log(persons);
