'use strict'

// Запрашивает, обрабатывает, возвращает число или null.
function getNum_or_null(text, byDefault = 0) {
  while (true) {
    var num = prompt(text, byDefault);
    if (num === null) {
      return num;
    }
    num = num.replace(/\s/g, "");
    if (num === "") {
      alert("Вы ничего не ввели");
    } else if (isNaN(Number(num))) {
      alert("Числа вводим цифрами )");
    } else {
      return +num;
    }
  }
}

const Months = ['января','февраля', 'марта', 'апреля', 'мая', 'июня',
                'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

const Days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']                


const wordHours = ['час', 'часа','часов']

const wordMinutes = ['минута', 'минуты', 'минут']

const wordSeconds = ['секунда', 'секунды', 'секунд']

const hourEndings = {
  lastNum1: '',
  lastNum234: 'а',
  lastNumOther: 'ов',
}

const msEndings = {
  lastNum1: 'а',
  lastNum234: 'ы',
  lastNumOther: '',
}

function getEnding(num, typeEndings) {
  if (11 <= num%100 && num%100 <= 14) {
    return typeEndings[2];
  }
   else if(num%10 === 2 || num%10 === 3 || num%10 === 4) {
    return typeEndings[1];
  }
  else if(num%10 === 1){
    return typeEndings[0];
  }
   else {
    return typeEndings[2];
  }
}