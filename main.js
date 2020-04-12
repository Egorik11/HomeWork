'use strict';

// 1
let string1 = 'Ytube';
let string2 = 'ou';
let sliceString = string1.slice(0, 1) + string2 + string1.slice(1, 5) ;
console.log(sliceString); // --> YouTube


// 2
let numbers = [25, 1];
let project = 'проекта';
let team = 'команда';
let howMuch = 'Сколько';
let str = 'нужно программистов чтобы сделать проект ?';
let sentence = `${howMuch} ${str} Для ${project} ${str.slice(0, 5)} ${team} из ${numbers.slice(0, 1)} человек`;
console.log(sentence) // --> собрать предложение

// 3
// Напишите функцию fizzBuzz, которая будет возвращать
// 'Fizz' если передаваемый параметр кратен 3,
// 'Buzz', если передаваемый параметр кратен 5,
// 'FizzBuzz' - если параметр кратен 3 и 5.
// Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
function fizzBuzz(num){
    if(num % (3 && 5) === 0){
        console.log('FizzBuzz');
    } else if (num % 3 === 0){
        console.log('Fizz');
    } else if (num % 5 === 0){
        console.log('Buzz');
    } else if(!(num % (3 && 5) === 0) ){
        console.log(num);
    }
}
fizzBuzz(30);

// 4
// Напишите функцию которая будет возвращать объект
// с свойством name, а значением будет первый аргумент функции
function returnObj(value){
    return ({name: value});
}
console.log(returnObj('Егор'));


// 5
// Функция будет принимать 1 аргумент
// - ОБЪЕКТ у которого
// будет свойство name
// и возвращать новый объект изменяя свойство name
// в большой регистр

function upperObj(value){
    let newObj = {
        name: value.toUpperCase()
    }
    console.log(newObj);
}
upperObj('егор');


// 6
// Напишите функцию которая принимает в качестве аргумента массив и элемент массива, 
// и добавляет элемент в конец массива (без метода push)

const fun = (a, b) => {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        res.unshift(a[i]);
    }
    res.unshift(b);
    return res.reverse();
};
console.log(fun([1, 2, 3, 4], 9));

// 7
// Напишите функцию которая принимает 3 аргумента, третий аргумент - это объект. 
// Функция создает новый объект и добавляет ключ - это первый аргумент, а значение - второй аргумент 
// Проверяет если есть свойство name в переданном объекте, тогда добавляет данное свойство и возвращает новый объект

