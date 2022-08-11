//! условные операторы
//! тернарные оператор
// ! условие ? () : ()
// 1
// let currentUser = false;
// currentUser
// ? alert("добро пожаловать")
// : alert("зарегист, или войдите в свой акк");

// 2
// let password = prompt("введите пароль");
// let passwordConfirm = prompt("подтвердите пароль");
// password === passwordConfirm
// ? alert("вы успешно подтвердили пароль")
// : alert("пароль не совпадают");

// 3
// let age = prompt("сколько вам лет?");
// age >= 18 ? console.log("добро пожаловать") : console.log("доступ запрещен");

// 4
// let role = "user";
// role === "admin"
//   ? alert("вы можете редакт. группу")
//   : alert("у вас нет прав не редакт");

// 5
// let productsCoun = 0;
// productsCoun > 0
//   ? alert(`в корзине ${productsCoun} товаров`)
//   : alert("корзина пуста");

// ! if/ if...else/ if...els/ if...elsee
// 1
// let name = prompt("введите имя");
// if (name === "john") {
//   alert(`привет ${name}`);
// }

// 2
// let age = 2;
// let canDrive = null;
// console.log(canDrive);
// if (age > 17) {
//   canDrive = true;
// } else {
//   canDrive = false;
// }
// console.log(canDrive);

// 3
// let startTime = 9;
// let arrive = 9;
// if (arrive >= startTime) {
//   console.log("можем зайти");
// } else {
//   console.log("не впускают в офис - закрыто");
// }

// 4
// let num1 = +prompt("первое число");
// let operator = prompt("матемю оператор");
// let num2 = prompt("второе число");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// }else  {
// alert("ошибка! введите корректный оператор!")
// }

// ! switch case
// let season = +prompt("выберите сезон");
// switch (season) {
// season ===1
// "1" === 1
// 1 === 1
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("Весна");
//     break;
//   case 3:
//     console.log("лето");
//     break;
//   case 4:
//     console.log("осень");
//     break;
//   default:
//     console.log("выберите число от 1 до 4");
// }

// CREATE, READ, UPDATE, DELETE -> CRUD - operations
// let action = "SAY_HELLO";
// switch (action) {
//   case "CREATE":
//     alert("создан профиль");
//     break;
//   case "READ":
//     alert("отображение профиля");
//     break;
//   case "UPDATE":
//     alert("есть отображение профиля");
//     break;
//   case "DELETE":
//     alert("профиль удален");
//     break;
//   default:
//     alert("действие не относится к CRUD!");
// }

// let day = prompt("выберите день недели");
// switch (day) {
//   case "1":
//     console.log("пн");
//     break;
//   case "2":
//     console.log("вт");
//     break;
//   case "3":
//     console.log("ср");
//     break;
//   case "4":
//     console.log("чт");
//     break;
//   case "5":
//     console.log("пт");
//     break;
//   case "6":
//     console.log("сб");
//     break;
//   case "7":
//     console.log("вс");
//     break;
//   default:
//     console.log("это не день неделт");
// }

// логическое И -&&
// let bread = "baton";
// let product1 = "молоко";
// if (bread === "baton" && product1 === "молоко") {
//   alert("взяли нужное!");
// } else {
//   alert("не то, что нужно!");
// }

// логическое ИЛИ - ||
// let product = "лепешка";
// if (product === "лепешка" || product === "батон") {
//   alert("правильно");
// } else {
//   alert("неправильно");
// }

// !10
// !22
// let arrive = prompt("во сколько вы пришли?");
// if (arrive >= 10 && arrive <= 22) {
//   alert("офис открыт");
// } else {
//   alert("офис закрыт");
// }

// данные из БД
// email: user123
// password: ps123

// const email = prompt("введите эл. почту");
// const password = prompt("введите пароль");
// if (email === "user123" && password === "ps123") {
//   alert("вы успешно вошли в свой аккаунт");
// } else {
//   alert("email или пароль неверный");
// }

// const email = prompt("введите эл. почту");
// const password = prompt("введите пароль");
// console.log(email, password);
// console.log(Boolean(email));
// if (email == null || password == null || email === "" || password === "") {
//   alert("заполните поля");
// } else {
//   // alert("есть данные");
//   if (email === "user123" && password === "ps123") {
//     alert("вы успешно вошли в свой аккаунт");
//   } else {
//     alert("email или пароль неверный");
//   }
// }

// let password = prompt("введите пароль");
// const tries = 1;
// if (password === "ps123") {
//   alert("пароль введен правильно");
// } else {
//   password = prompt("попробуйте заново ввести пароль");
//   console.log(password);
//   if (password === "ps123") {
//     alert("пароль введен правильно");
//   } else {
//     alert("ваш аккаунт заблокирован");
//   }
// }

// const email = prompt("введите эл. почту");
// if (email === "user123") {
//   let password = prompt("введите пароль");
//   if (password === "ps123") {
//     alert("logged in!");
//   }
// }

// let answer = confirm("вы хотите покинуть игру?");
// console.log(answer);
// if (answer) {
//   alert("вы покинуль игру");
// } else {
//   alert("ура! мы поиграем еще!");
// }

// инкремент - увеличить на 1 (++)
// декремент - уменьшить на 1 (--)

// let likes = 5;
// let answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк, всего лайков: ${likes}`);
// }
// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк, всего лайков: ${likes}`);
// }
// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк, всего лайков: ${likes}`);
// }

// let tasksInClassroom = confirm("вы выполнили задание из классрума?");
// let tasksInClassroom = confirm("вы выполнили задание из makers.courses?");
// if (tasksInClassroom && tasksInClassroom) {
//   alert("у вас будет высокий KPI");
// } else {
//   alert("у вас будет низний KPI");
// }

// momentum, teamflow

let homework = "idm";
if (homework === "momentum" || homework === "teamflow") {
  alert("100 баллов");
} else {
  alert("0 баллов");
}
