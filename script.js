'use strict'

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let num = 0;
while (num <= 100) {
    let check = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(num);
    num++;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let basket = [
    {
        product: "pen",
        price: getNumber(50, 100)
    },
    {
        product: "pencil",
        price: getNumber(50, 100)
    },
    {
        product: "file",
        price: getNumber(50, 100)
    },
    {
        product: "paper",
        price: getNumber(50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket){
    basketPrice += prod.price;
}

function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket){
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");


//3.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:for(…){// здесь пусто}

for (let i = 0; i < 10; console.log(i++)) {}

//4. Нарисовать пирамиду с помощью console.log

var n = 5;
generateNumberTriangle(n);

function generateNumberTriangle(n) {
    var width = 40;
    var midpoint = Math.floor(width / 2);
    let level = '';

    for (var i = 0; i < 20; i++) {
        level = '';
        for (var j = 0; j < width; j++) {
            if (j < midpoint - i || j > midpoint + i) {
                level += ' ';
            } else {
                level += 'x';
            }
        }
        console.log(level);
    }
}