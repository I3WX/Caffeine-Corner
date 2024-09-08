import "./styles.css";

// Import images
import blackCoffee from "./images/black coffe.jpg";
import coldBrewCoffee from "./images/cold brew coffe.jpg";
import coffeeWithLeaf from "./images/coffe with leaf art top pic.jpg";
import coldCoffee from "./images/cold coffe.jpg";
import coffeeCup from "./images/coffe cup.jpg";
import coffeeBeans from "./images/coffe beans.jpg";
import cafeInterior from "./images/cafe intenier.jpg";


// Hero background image
document.querySelector(".hero").style.backgroundImage = `url(${cafeInterior})`;

// Menu images
document.getElementById("black-coffee").src = blackCoffee;
document.getElementById("cold-brew-coffee").src = coldBrewCoffee;
document.getElementById("coffee-with-leaf").src = coffeeWithLeaf;
document.getElementById("cold-coffee").src = coldCoffee;

// Gallery images
document.getElementById("coffee-cup").src = coffeeCup;
document.getElementById("coffee-beans").src = coffeeBeans;
document.getElementById("cafe-interior").src = cafeInterior;
