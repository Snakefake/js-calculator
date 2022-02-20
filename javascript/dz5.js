// Task 1
let userInfo = {
    name: "John",
    surname: "Smith",
};
console.log(userInfo);
let user = userInfo;
console.log(user);
user.name = 'Pete';
console.log(userInfo);
delete userInfo["name"];
console.log(userInfo);
// Task 2 Объявление const защищает только саму переменную от изменений. Другими словами, user хранит ссылку на объект. И это не может быть изменено.

//Task 3

let salaries = {
    "John":100,
    "Ann":160,
    "Pete":130
};
let sum = 0;
for( let salary of Object.values(salaries)){
    sum += salary;
}
console.log(sum);





