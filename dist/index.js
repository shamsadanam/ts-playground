"use strict";
// Basic/Primitive Types
let id = 1;
let username = "Six";
let isOnline = true;
// Arrays
let number = [23, 34, 39, 30];
let spcificOrder = [12, true, "orange"];
//Tuple Array
let arrOfArr = [
    [1, "red"], [2, "blue"], [3, "green"]
];
//Enums
var dir;
(function (dir) {
    dir[dir["UP"] = 0] = "UP";
    dir[dir["DOWN"] = 1] = "DOWN";
    dir[dir["LEFT"] = 2] = "LEFT";
    dir[dir["RIGHT"] = 3] = "RIGHT";
})(dir || (dir = {}));
//Assertions
let cid = 1;
let customerId = cid;
//Unions
let pid = "1";
pid = "one";
let user = {
    id: 1,
    name: "red"
};
let productOne = {
    id: 22,
    name: "Product One"
};
let red = {
    name: "Red Primary",
    age: 25
};
// productOne.id = 23;
productOne.name = "Product Three";
//functions 
function add(a, b) {
    return a + b;
}
add(3, 2);
//Void Functions
function log(msg, name) {
    console.log(`Hello ${name}, ${msg}`);
}
let vipUser = {
    id: 1,
    name: "blue"
};
const addition = (a, b) => a + b;
const division = (a, b) => a / b;
addition(5, 7);
division(90, 6);
