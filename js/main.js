let date = new Date();
date.setMonth(+1);
let text = "Год - " + date.getFullYear() + "<br> Месяц - " + date.getMonth() + '<br> День - ' + date.getDate() + '<br>Время - ' + date.getHours() + ':'+ date.getMinutes();
document.write(text);

let text2 = "";
switch (date.getMonth()) {
    case 1: text2 = "Январь";
        break;
    case 2: text2 = "Февраль";
        break;
    case 3: text2 = "Март";
        break;
    case 4: text2 = "Апрель";
        break;
    case 5: text2 = "Май";
        break;
    case 6: text2 = "Июнь";
        break;
    case 7: text2 = "Июль";
        break;
    case 8: text2 = "Август";
        break;
    case 9: text2 = "Сеньтябрь";
        break;
    case 10: text2 = "Октябрь";
        break;
    case 11: text2 = "Ноябрь";
        break;
    case 12: text2 = "Декабрь";
        break;
    default:
        text2 = "Ебать капать теперь у нас больше месяцов в году!";
        break;
}


document.write("<br>"+text2);