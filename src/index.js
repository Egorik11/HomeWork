import users from "./users";
import fruits from "./users";
import vowels from "./users";

console.log(users.length, fruits.length, vowels.length);

// ------------------------------------------------------------------------------------------------
/**
 * @param {String} userId   ID пользователя
 *
 * @return {Object} location        Пример: {lat: 61.498616, long: 61.498616}
 */
function getLocationByUserId(userId) {
  users.forEach(el => {
    if (el._id === userId) {
      let localUsers = {
        lat: el.latitude,
        long: el.longitude
      };
      console.log(localUsers);
    }
  });
}
getLocationByUserId("5a58d21c52dc0461eb0e45f6");

// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 *
 * @return {Array} orderListFruits   Вывести пронумерованных фруктов ['1. banan', '2. apple' ...]
 */
function mapOrderList(fruits) {
  let friutsOrder = fruits.map(function(el, index) {
    return `${index + 1}. ${el}`;
  });
  console.log(friutsOrder);
}
mapOrderList(["banan", "apple", "avocado", "kivi"]);

// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 *
 * @return {Array} transformListFruits
 * Вывести список пронумерованных фруктов, только 3 символа каждого фрукта ['1. ban', '2. app' ...]
 */
function mapFruitsWithCount(fruits) {
  let transformListFruits = fruits.map(function(el, index) {
    return `${index + 1}. ${el.slice(0, 3)}`;
  });
  return transformListFruits;
}
console.log(mapFruitsWithCount(["banan", "apple", "avocado", "kivi"]));

// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 * @param {Array} vowels   Массив гласных
 *
 * @return {Array} fruitsListByVowels
 * Вывести список фруктов, у которых первая буква гласная ['apple', 'avocado' ...]
 */
function mapFruitsByVowels(fruits, vowels) {
  let fruitsListByVowels = [];
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (fruits[i][0] === vowels[j]) {
        fruitsListByVowels.push(fruits[i]);
      }
    }
  }
  return fruitsListByVowels;
}
console.log(
  mapFruitsByVowels(
    ["banana", "apple", "avocado", "kivi"],
    ["a", "e", "i", "o", "y", "u"]
  )
);

// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} users    Массив пользователей
 *
 * @return {Array} companyList       Список компаний
 */
function getCompanyList(usersArray) {
  let companyList = [];
  usersArray.forEach(el => {
    companyList.push(el.company);
  });
  console.log(companyList);
}
getCompanyList(users);

// ------------------------------------------------------------------------------------------------
/**
//  * @param {Array} users    Массив пользователей
//  *
//  * @return {Array} uniqueFavoriteFruits       Список уникальных фруктов
//  */

function getUniqueFavoriteFruits(usersArray) {
  let uniqueFavoriteFruits = [];
  usersArray.forEach(el => {
    if (!uniqueFavoriteFruits.includes(el.favoriteFruit)) {
      uniqueFavoriteFruits.push(el.favoriteFruit);
    }
  });
  return uniqueFavoriteFruits;
}
console.log(getUniqueFavoriteFruits(users));

// ------------------------------------------------------------------------------------------------
/**
 * @param {String|Number|Boolean} field    свойство пользователя (примитив) - дополнительно можно сделать и по обьект/массивам
 *
 * @return {Array} uniqueFavoriteFruits      Сортированный список пользователей по значению свойства
 */

function sortUsersByField(field) {
  // age!
  // let uniqueFavoriteFruits = users.sort(function(a, b) {
  //   return a[field] - b[field]
  // });
  // return uniqueFavoriteFruits;

  // isActive!
  let uniqueFavoriteFruits = users.sort(function(a, b) {
    return b[field] - a[field];
  });
  return uniqueFavoriteFruits;
}
console.log(sortUsersByField("isActive"));
