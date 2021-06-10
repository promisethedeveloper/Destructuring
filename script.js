'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderFood: function({address = "coventry road", time = "22:00", mainIndex, starterIndex}) {
    console.log(`Order has been received! The order is ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]}, and it will be delivered to ${address}, before ${time} `);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderFood({
  time: '12:00',
  address: "234 Highfield road",
  mainIndex: 2,
  starterIndex: 1,
})

restaurant.orderFood({
  mainIndex: 1,
  starterIndex: 2,
})


const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);


let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [firstNumber, , [fifth, sixth]] = nested;
console.log(firstNumber, fifth, sixth);

// Setting default values to the destructured array, incase the property/value we are trying to read/access does not exist
const [i = 1, j = 2, k = 3, l = 4 ] = [8, 9, 19];
console.log(i,j,k,l);

// While destructing an object you must use the property name i.e the key
const {name, categories, mainMenu} = restaurant;
console.log(name, categories, mainMenu);

// Making the variable names different from the property name
const {name: restaurantName, categories: theCategories, mainMenu: theMenus} = restaurant;

console.log(restaurantName, theCategories, theMenus);

// We created a default key called menu and assigned the value to an empty array and changed the key of "location" to "places" and assigned the value to an empty array, but it exist so only the name change that is the key changed
const {menu = [], location: places = []} = restaurant;
console.log(menu, places);

const {openingHours} = restaurant;
console.log(openingHours);
const {fri} = openingHours;
console.log(fri);
const {open, close} = fri;
console.log(open, close);