import users from "./users";
import fruits from "./fruits";
import vowels from "./vowels";

console.log(users.length, fruits.length, vowels.length);

// ------------------------------------------------------------------------------------------------
/**
 * @param {String} userId   ID пользователя
 *
 * @return {Object} location        Пример: {lat: 61.498616, long: 61.498616}
 */
function getLocationByUserId(userId) {
  return users.reduce((userLoc, user) => {
    if (user._id === userId) {
      userLoc.lat = user.latitude;
      userLoc.long = user.longitude;
    }
    return userLoc;
  }, {});
}
console.log(getLocationByUserId("5a58d21c52dc0461eb0e45f6"));
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 *
 * @return {Array} orderListFruits   Вывести пронумерованных фруктов ['1. banan', '2. apple' ...]
 */
function mapOrderList(fruits) {
  const orderListFruits = fruits.map((fruit, i) => {
    return `${i + 1}. ${fruit}`;
  });
  console.log(orderListFruits);
}
// mapOrderList(["banan", "apple", "avocado", "kivi"]);
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 *
 * @return {Array} transformListFruits
 * Вывести список пронумерованных фруктов, только 3 символа каждого фрукта ['1. ban', '2. app' ...]
 */
function mapFruitsWithCount(fruits) {
  const transformListFruits = fruits.map((fruit, i) => {
    return i + 1 + ". " + fruit.slice(0, 3);
  });
  console.log(transformListFruits);
}
// mapFruitsWithCount(["banan", "apple", "avocado", "kivi"]);
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 * @param {Array} vowels   Массив гласных
 *
 * @return {Array} fruitsListByVowels
 * Вывести список фруктов, у которых первая буква гласная ['apple', 'avocado' ...]
 */
function mapFruitsByVowels(fruits, vowels) {
  return fruits.filter(fruit => vowels.includes(fruit[0]));
}

console.log(mapFruitsByVowels(fruits, vowels));
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} users    Массив пользователей
 *
 * @return {Array} companyList       Список компаний
 */
function getCompanyList(users) {
  const companyList = users.map(user => {
    return user.company;
  });
  console.log(companyList);
}
// getCompanyList(users);
// ------------------------------------------------------------------------------------------------
/**
 * @param {Array} users    Массив пользователей
 *
 * @return {Array} uniqueFavoriteFruits       Список уникальных фруктов
 */

function getUniqueFavoriteFruits(users) {
  const usersFruits = users.map(user => {
    return user.favoriteFruit;
  });
  const uniqueFavoriteFruits = Array.from(new Set(usersFruits));
  console.log(uniqueFavoriteFruits);
}
// getUniqueFavoriteFruits(users);
// ------------------------------------------------------------------------------------------------
/**
 * @param {String|Number|Boolean} field    свойство пользователя (примитив) - дополнительно можно сделать и по обьект/массивам
 *
 * @return {Array} uniqueFavoriteFruits      Сортированный список пользователей по значению свойства
 */

function sortUsersByField(field) {
  if (field === "isActive") {
    return users
      .sort(function(a, b) {
        if (String(a[field]).localeCompare(String(b[field]))) {
          return -1;
        } else {
          return 1;
        }
      })
      .map(user => user[field]);
  } else {
    return users
      .sort(function(a, b) {
        return String(a[field]).localeCompare(String(b[field]));
      })
      .map(user => user[field]);
  }
}
// console.log(sortUsersByField("age"));
// console.log(sortUsersByField("name"));
// console.log(sortUsersByField("isActive"));
