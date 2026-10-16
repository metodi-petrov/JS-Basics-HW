// ------------------------------------ Task 1 ------------------------------------ //
    /* DESCRIPTION:
    Кои редове ще дадат грешка и каква? Поправете ги (в коментар или
    като нов код под тях).
    */

    // YOUR CODE HERE
    // 'use strict'; //
    // let price = 10;
    // prise = 20;
    // let 2nd = 5;
    // let total = price + ;
    // 5 = price;

    // 'use strict';

    // let pricr = 10;
    // price = 20; // Не сме декларили променлива price, ще дате грешка.
    // let 2nd = 5; // Wrong variable name it can start upper/lowecase _ or $
    // let total price = price +;


// ------------------------------------ Task 2 ------------------------------------ //
    /* DESCRIPTION:
    Запишете в променливи и изведете със console.log() следните низове

        1. Тя каза: "Здравей!"
        2. It's a nice day
        3. Той отговори: "It's fine"  
    */

    // YOUR CODE HERE
    
    console.log("Тя каза: 'Здравей!'" + "\nIt's a nice day" + "\nТой отговори: 'It's fine'");


// ------------------------------------ Task 3 ------------------------------------ //
    /* DESCRIPTION:
    Изведете с ЕДИН console.log() следния резултат:

        Name:	Ada
        Age:	36
        Path:	C:\Users\ada
    */

    // YOUR CODE HERE
    console.log("Name:\tAda \nAge:\t36 \nPath:\tC:\\Users\\ada");






// ------------------------------------ Task 4 ------------------------------------ //
    /* DESCRIPTION:
    Дадени са две променливи a и b. Разменете стойностите им, така че
    a да стане "right", а b - "left", като използвате ТРЕТА, помощна променлива.
    Изведете резултата с template string.

    Бонус: Защо долният опит не работи? Какво ще изведе? Отговорете в коментар.
        a = b;
        b = a;
    */

    // YOUR CODE HERE
    // let a = "left";
    // let b = "right";

    let a = "left";
    let b = "right";
    let reverse = a;
    a = b;
    b = reverse;

    // TEST
    // console.log(`a = ${a}, b = ${b}`); // Expected output: a = right, b = left

    console.log(`a = ${a}, b = ${b}`); // Expected output: a = left, b = right
    console.log(`${a} + ${b}`);


// ------------------------------------ Task 5 ------------------------------------ //
    /* DESCRIPTION:
    Създайте променливи за: име (string), възраст (number),
    дали сте студент (boolean), любимо число (number),
    среден успех (number, с десетична част).
    Добавете и променлива `phone` без стойност.

    Изведете с template string и console.log() визитка на няколко реда:

        Name: <име>
        Age: <възраст>
        Student: <true/false>
        Favourite number: <число>
        GPA: <успех>
        Phone: undefined

    След визитката изведете в конзолата typeof на всяка от променливите.
    Спазвайте конвенциите за имена (lowerCamelCase) и оставяйте коментари.
    */

    // YOUR CODE HERE

    let name = "John Doe"; // string
    let age = 25; // Integer
    let isStudent = true; // boolean
    let favouriteNumber = 7; // number
    let gpa = 2.75; // Float
    let phone; // undefined
    
    console.log(`Name: ${name} \nAge: ${age} \nStudent: ${isStudent} \nFavourite number: ${favouriteNumber} \nGPA: ${gpa} \nPhone: ${phone}`);
    



   // console.log ("Age:": age + \n "Student:": isStudent + \n "Favourite number:": favouriteNumber + \n "GPA:": gpa + \n "Phone:": phone);
