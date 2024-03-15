let orderPage = () => {
    window.location.href ="./config.html";
}
let homePage = () => {
    window.location.href ="./index.html";
}
let viewPage = () => {
    window.location.href ="./view.html";
}
let redirect = () => {
    window.location.href ="./view.html";
}
function fullDeletionBase() {
    while(order.base.length > 0) {
        order.base.pop();
    }
    console.log(`Base order: ${order.base}`);
}
function fullDeletionProtein() {
    while(order.protein.length > 0) {
        order.protein.pop();
    }
    console.log(`Protein order: ${order.protein}`);
}
function fullDeletionToppings() {
    while(order.toppings.length > 0) {
        order.toppings.pop();
    }
    console.log(`Toppings order: ${order.toppings}`);
}
//Displaying the previous order saved by the user onload
const currentOrder = localStorage.getItem("order");
console.log(currentOrder);
//Object to store user data
let order = {
    toppings: [],
    protein: [],
    base: []
};
//Arrays of all selectable options
const toppings = document.getElementsByClassName("toppingOption");
const protein = document.getElementsByClassName("proteinOption");
const base = document.getElementsByClassName("baseOption");
console.log(toppings);
console.log(protein);
console.log(base);
const submit = document.getElementById("submitOrder");
submit.addEventListener("click", () => {
    //Getting the user's order
    let orderObjectString = JSON.stringify(order);
    console.log(orderObjectString);
    //Saving the order to the user's local pc
    localStorage.setItem("order", orderObjectString);
});
//Moving user input into object arrays
//Pushing base to order.base (the array)
for (let i = 0; i < base.length; i++) {
    let baseOption = base[i];
    baseOption.addEventListener("click", () => {
        let value = baseOption.id
        order.base.push(value);
        //One value
        order.base.forEach(fullDeletionBase)
        console.log(`After deletion ${order.base}`);
        order.base.push(value);
        console.log(`New array: ${order.base}`)//Just for debugging
    });
}
//Pushing protein to order.protein (the array)
for (let i = 0; i < protein.length; i++) {
    let proteinOption = protein[i];
    proteinOption.addEventListener("click", () => {
        let value = proteinOption.id
        order.protein.push(value);
        //One value
        order.protein.forEach(fullDeletionProtein)
        console.log(`After deletion ${order.base}`);
        order.protein.push(value);
        console.log(`New array: ${order.protein}`)//Just for debugging
    });
}
//Pushing toppings to order.toppings (the array)
for (let i = 0; i < toppings.length; i++) {
    let toppingOption = toppings[i];
    toppingOption.addEventListener("click", () => {
        let value = toppingOption.id
        order.toppings.push(value);
        //One value
        order.toppings.forEach(fullDeletionToppings)
        console.log(`After deletion ${order.toppings}`);
        order.toppings.push(value);
        console.log(`New array: ${order.toppings}`)//Just for debugging
    });
}
    /*
    function comparingArr(arrValues) {
        arrValues.splice(0, arrValues.length);
    }
    */
    /*
    //let baseArr = order.base;
    if (order.base.includes("sushiRice")) {
        console.log("It includes sushi rice.")
        try {
        baseArr.forEach(comparingArr);
        console.log(baseArr);
        } catch {
            console.log("Caught");
            baseArr.forEach(fullDeletion);
            console.log(baseArr);
            baseArr.push("Sushi Rice");
            console.log(`New array: ${baseArr}`);
        }
    } else {
        console.log("No sushi rice");
    }
    */