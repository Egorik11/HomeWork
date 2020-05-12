// * Найти пользователя по идентификатору (_id)
// * @param {String} id - идентификатор пользователя
// * @return {Object} - объект пользователя
// */
function getUserById(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === id) {
      return users[i];
    }
  }
}
console.log(getUserById("5a58d21c52dc0461eb0e45f6"));

// ------------------------------------------------------------------------------------------------

/*
 * Определить средний возраст пользователей
 * @return {Number} - средний возраст
 */

function getAverangeUsers() {
  let avarangeUsers = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].age) {
      avarangeUsers += users[i].age / users.length;
    }
  }
  console.log(avarangeUsers);
}
getAverangeUsers();

// ------------------------------------------------------------------------------------------------

/*
 * Определить количество активных пользователей
 * @return {Array} - список активных пользователей
 */
function getActiveUsers() {
  let newActiveUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive === true) {
      newActiveUsers.push(users[i]);
    }
  }
  return newActiveUsers;
}
console.log(getActiveUsers());

// ------------------------------------------------------------------------------------------------

/*
 * Определить сколько пользователей мужского и женского пола
 * @return {Object} - { male: 10, female: 20 }
 */

function getUsersGender() {
  let filterUser = {};
  let getUsersObj = users.filter((el) => {
    if (el.gender === "male") {
      filterUser.male = el.gender.length;
    } else if (el.gender === "female") {
      filterUser.female = el.gender.length;
    }
  });
  return filterUser;
}
console.log(getUsersGender());

// ------------------------------------------------------------------------------------------------

/*
 * Определить самого старшего пользователя
 * @return {Number} - возраст самого старшего пользователя
 */
function getOldestUser() {
  let oldUsers = 0;
  for (let i = 0; i < users.length; i++) {
    if (oldUsers < users[i].age) {
      oldUsers = users[i].age;
    }
  }
  return oldUsers;
}
console.log(getOldestUser());

// ------------------------------------------------------------------------------------------------

/*
 * Определить самого младшего пользователя
 * @return {Number} - возраст самого младшего пользователя
 */
function getYoungestUser() {
  let min = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].age) {
      min = Math.min(users[i].age);
    }
  }
  return min;
}
console.log(getYoungestUser());

// // ------------------------------------------------------------------------------------------------

// /*
// * Сортировать пользователей по возрасту
// * @param {String} order - указываться asc или desc (по возростанию / по убыванию)
// * @return {Array} - список сортированных пользователей
// */
function sortUsersByAge(order) {
  let ageUserSort = users.sort((a, b) => {
    if (order === "desc") return a.age - b.age;
    else if (order === "asc") return b.age - a.age;
  });
  return ageUserSort;
}
console.log(sortUsersByAge("desc"));

// // ------------------------------------------------------------------------------------------------

// /*
// * Определить количество пользователей, которые любят определенный фрукт
// * @param {String} fruitName - название фрукта (apple)
// * @return {Array} - список пользователей, кто люит этот фрукт
// */
function getFavoriteFruit(fruitName) {
  let fruitFavorite = users.filter(function (element) {
    return element.favoriteFruit === fruitName;
  });
  console.log(fruitFavorite);
}
getFavoriteFruit("apple");

// // ------------------------------------------------------------------------------------------------

// /*
// * Создать новых список пользователей на основе указаных аргументов
// * @param {Array} fields - список свойств(ключей) по которым нужно брать поля,
// * например ["name", "email", "phone", balance]
// *
// * @return {Array} - список активных пользователей
// */
function mapUsersByFields(fields) {
  let isActive = users.filter(function (element) {
    return element.isActive === true;
  });
  let mapFieldsUser = isActive.map(function (cerrentValue) {
    return cerrentValue[fields];
  });
  console.log(mapFieldsUser);
}
mapUsersByFields(["name"]);

// // ------------------------------------------------------------------------------------------------

// /*
// * Поиск пользователей по тегам
// * @param {Array} tags - список тегов(ключей) по которым выполняем,
// * @return {Array} - список пользователей у которых есть хотя бы один тег
// */
function getUsersByTags(tags) {
  let usersTags = [];
  users.forEach((el) => {
    if (el.tags.includes(tags)) {
      usersTags.push(el);
    }
  });
  return usersTags;
}
console.log(getUsersByTags("ut"));

// // ------------------------------------------------------------------------------------------------

// /*
// * Какой общий баланс всех пользователей
// * @return {String} - $23,4344.10
// */
function getBalanceUsers() {
  let sum = 0;
  users.forEach((el) => {
    sum = sum + Number(el.balance.slice(1).replace(",", ""));
  });
  let result = String(sum).split("");
  result.splice(-6, 0, ",");
  return "$" + result.join("");
}
console.log(getBalanceUsers());
