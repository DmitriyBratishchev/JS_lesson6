"use strict";

let UserList = [];

// Заполняет UserList
AddUser('Иван Иванов');
AddUser('Пётр Петров');
AddUser('Василий Васильев');

while (true) {

  let fullName = prompt("Введите Имя и Фамилию через пробел:");
  if (fullName === null) {
    break;
  }

  AddUser(fullName);

};

printList();


function AddUser(fullName) {
  UserList.push(new User(fullName));
  return UserList;
}


function User(fullName) {
  let d = new Date();
  let date = d.getDate();
  let month = Months[d.getMonth()];
  let year = d.getFullYear();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  let fullDate = date + " " + month + " " + year;
  let time = hour + ":" + minute + ":" + second;

  let everyName = fullName.split(" ");


  this.firstName = everyName[0];
  this.lastName = everyName[1];
  this.regDate = fullDate + " в " + time;
}


function getAllUsers(UserList) {

  let li = [];

  for (let user of UserList){

    let fullNameDateTimeRegistration =
      user.firstName +
      " " +
      user.lastName +
      " " +
      "зарегестрирован " +
      user.regDate +
      ".";
    li.push(fullNameDateTimeRegistration);
  }

  return li;
}

function printList(){
let li = getAllUsers(UserList);
li.forEach(li => {
  console.log(li)
});
}