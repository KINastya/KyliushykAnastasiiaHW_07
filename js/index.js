let age = prompt("Будь ласка, вкажіть рук вашого нарождення");
let town = prompt("В якому місті ви проживаєте ?");
let hobby = prompt("Вкажіть ваш улюблений вид спорту");
switch (age) {
    case "":
        age = ("Шкода, що Ви не захотіли ввести свій вік");
        break;
        default:
            age = age;
            break;
}
switch (town) {
    case "Київ":
        town = ("Ти живеш у столиці України");
        break;
    case "Вашингтон":
        town = ("Ти живеш у столиці США");
        break;
    case "Лондон":
        town = ("Ти живеш у столиці ВеликоЇ Британії");
        break;
    case "":
        town = ("Шкода, що Ви не захотіли ввести своє місто проживання");
        break;
        default:
            town = town;
            break;
}
switch (hobby) {
    case "Бокс":
        hobby = ("Круто! Хочеш стати Олександром Усиком?");
        break;
    case "Плавання":
        hobby = ("Круто! Хочеш стати Дмитом Алексєєвим?");
        break;
    case "Атлетика":
        hobby = ("Круто! Хочеш стати Васильом Вірастюком?");
        break;
    case "":
        hobby = ("Шкода, що Ви не захотіли ввести свой уллюбленний вид спорту");
        break;
        default:
            hobby = hobby;
            break;
}
alert(`• ${age} \n • ${town} \n • ${hobby}`);