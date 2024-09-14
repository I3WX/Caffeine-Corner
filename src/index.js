import "./style.css";

const coffeeQuotes = [
  "Coffee is a hug in a mug.",
  "Life happens, coffee helps.",
  "A day without coffee is like... just kidding, I have no idea.",
  "Coffee: because adulting is hard.",
  "First I drink the coffee, then I do the things.",
  "Coffee is always a good idea.",
  "Behind every successful person is a substantial amount of coffee.",
  "Espresso yourself!",
  "Caffeine and kindness.",
  "Stressed, blessed, and coffee obsessed.",
  "May your coffee be strong and your Monday be short.",
  "Drink coffee and do good.",
  "Coffee: the most important meal of the day.",
  "Coffee before talkie.",
  "Good ideas start with brainstorming. Great ideas start with coffee.",
  "Decaf? No thanks, I’m not a quitter.",
  "Coffee in one hand, confidence in the other.",
  "But first, coffee.",
  "Coffee is my love language.",
  "Coffee fuels my spirit.",
  "Coffee: because crack is bad for you.",
  "My blood type is coffee.",
  "No coffee, no workee.",
  "Coffee makes everything possible.",
  "Coffee is like a liquid hug for your brain.",
  "A yawn is a silent scream for coffee.",
  "I don't need an inspirational quote. I need coffee.",
  "A bad day with coffee is better than a good day without it.",
  "Adventure in life is good; consistency in coffee even better.",
  "More espresso, less depresso.",
  "You can do it. Coffee helps.",
  "Take life one sip at a time.",
  "Today's good mood is sponsored by coffee.",
  "Coffee: my hot friend I was telling you about.",
  "Coffee is the answer, I don't remember the question.",
  "All you need is love and more coffee.",
  "Coffee first, scheming later.",
  "The best time for coffee is now.",
  "Give me coffee and no one gets hurt.",
  "I like my coffee like I like my mornings: dark and bitter.",
  "Coffee is a way of stealing time that should by rights belong to your older self.",
  "Coffee and friends make the perfect blend.",
  "Coffee: a cup of hope in a world full of chaos.",
  "Coffee: because it's too early for wine.",
  "Inhale caffeine, exhale negativity.",
  "Coffee is a pleasure that should never be rationed.",
  "Coffee: a daily ritual of peace.",
];



const quote = document.getElementById("quote");

function randomNum(){
    return Math.floor(Math.random() * coffeeQuotes.length);
}

window.addEventListener("load" ,()=>{
    let quoteNum = randomNum()
    quote.innerText = `"${coffeeQuotes[quoteNum]}"`
})

