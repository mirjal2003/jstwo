
var mol = +prompt ('Введите сколько вам лет');

if (mol <= 18) {
     alert ('Вы ещё молоды, Вам нужно учится');
}else if (mol <= 50) {
     alert ('Вам нужно работать');
}else if (mol <= 59) {
     alert('Вам скоро на пенсию');
}else if(mol <= 100) {
     alert ('Вы ещё живы?');
}


time = +prompt('Введите сколько сейчас время ')

switch (time) {
    case 1:
        alert (' 1 часов ночи')
        break;
    case 2:
        alert (' 2 часов ночи')
        break;
    case 3:
        alert ('3 часов ночи')
        break;
    case 4:
        alert (' 4 часов ночи')
        break;
    case 5:
        alert (' 5 часов ночи')
        break;
    case 6:
        alert (' 6 часов ночи')
        break;
    case 7:
        alert ('7 часов утра ')
        break;
    case 8:
        alert (' 8 часов утра ')
        break;
    case 9:
        alert (' 9 часов утра ')
        break;
    case 10:
        alert (' 10 часов утра ')
        break;
    case 11:
        alert (' 11 часа дня')
        break;
    case 12:
        alert (' 12 часа дня')
        break;
    case 13:
        alert (' 1 час дня')
        break;
    case 14:
        alert (' 2 часа дня')
        break;
    case 15:
        alert (' 3 часа дня')
        break;
    case 16:
        alert (' 4 часа дня')
        break;
    case 17:
        alert (' 5 часа дня')
        break;
    case 18:
        alert ('6 часов вечера')
        break;
    case 19:
        alert ('7 часов вечера')
        break;
    case 20:
        alert ('8 часов вечера')
        break;
    case 21:
        alert ('9 часов вечера')
        break;
    case 22:
        alert ('10 часов вечера')
        break;
    case 23:
        alert ('11 часов вечера')
        break;
    case 24:
        alert ('12 часов вечера')
        break;
        default:
        alert ('Вы ввели время не правильно Введите только часы а не минуты ')
        break;

}












a = +(prompt("Введите число"));

b = +(prompt("Введите число"));

c = +(prompt("Введите число"));

if ((b < a && a < c) || (c < a && a < b)) alert(a + ' среднее число ');

if ((a < b && b < c) || (c < b && b < a)) alert(b + ' среднее число ');

if ((a < c && c < b) || (b < c && c < a)) alert(c + ' среднее число ');
