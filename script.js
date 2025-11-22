
//creating an array
// let actual_words = ["html","css","javascript","react","vue","angular","bootstrap","tailwind","jquery",
//     "jsx","dom","styles","script","button","header","node","express","mongodb","mysql","sql",
//     "api","routes","server","client","cookies","session","schema","controller","model","router",
//     "backend","frontend","fullstack","deploy","hosting","render","build","debug","query","module",
//     "github","gitlab","docker","vscode","postman","terminal","npm","yarn","config","update"];

let actual_words = [
  "apple","orange","banana","grapes","mango","lemon","peach","cherry","papaya","tomato",
  "chair","table","pillow","candle","bottle","camera","mirror","window","blanket","basket",
  "forest","river","mountain","desert","garden","ocean","island","valley","bridge","tunnel",
  "school","teacher","pencil","eraser","notebook","marker","library","college","uniform","classroom",
  "animal","tiger","zebra","rabbit","monkey","parrot","camel","donkey","turtle","butterfly",
  "family","mother","father","sister","brother","friend","people","person","child","parents",
  "coffee","butter","cheese","cookie","dinner","lunch","breakfast","kitchen","spoon","plate",
  "yellow","purple","silver","golden","beauty","pretty","strong","smooth","silent","happy",
  "future","memory","dreams","secret","danger","moment","travel","market","season","pocket",
  "planet","energy","nature","flower","garden","circle","square","number","hunter","driver"
];


//Timer function
// let timeLeft = 3600;
// let timeLeft = 1800;
let timeLeft = 150;
let timeStamp = document.getElementById("time-buzzer");
function timeStartsNow(){
    let timer = setInterval(function(){
        if (timeLeft <= -1){
            clearInterval(timer);
            timeStamp.innerHTML = "Time's up!";
            timeStamp.style.fontWeight = "bold";
            timeStamp.style.color = "red";
        }
        else{
            timeStamp.innerHTML = "Time Left: " + timeLeft + " Seconds";
            timeStamp.style.fontWeight = "bold";
            timeStamp.style.color = "red";
            timeLeft--;
        }
    },1000);
}
timeStartsNow();

//Scrambled words function
let current_word = '';
let score = 0;
let Shuffled_text = document.getElementById("scrambled-text");
let input_field = document.getElementById("text-box");
let input_box = document.getElementById("input-place")
let check_btn = document.getElementById("check-btn");
let next_btn = document.getElementById("next-btn");
let score_span = document.querySelector("#scores span");
let popup_msg = document.getElementById("pop-msg");
function ScrambledWords(word){
    const array = word.split('');
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array.join("");
}

//loading the function
function loading_func(){
    input_field.value = '';
    popup_msg.textContent = '';

    let index = Math.floor(Math.random() * actual_words.length);
    current_word = actual_words[index];
    let scrambled = ScrambledWords(current_word);
    if (scrambled === current_word && current_word.length > 1){
        scrambled = ScrambledWords(current_word);
    }
    Shuffled_text.textContent = scrambled.split('').join(' ');
    input_field.focus();
}

//check button
check_btn.addEventListener("click", function(){
    let guessing_word = input_field.value.trim().toLowerCase();
    if (!guessing_word){
        popup_msg.textContent = "Type Your Guess!";
        popup_msg.style.color = "goldenrod";
        popup_msg.style.fontWeight = "bold";
        popup_msg.style.textAlign = "center";
        return;
    }
    if(guessing_word === current_word){
        popup_msg.textContent = "🎊Correct Answer!🎊";
        popup_msg.style.color = "green";
        popup_msg.style.fontWeight = "bold";
        popup_msg.style.textAlign = "center";
        score++;
        score_span.textContent = score;
    }
    else{
        popup_msg.textContent = "Wrong Ans!👎🏻 Correct Word: " + current_word;
        popup_msg.style.color = "red";
        popup_msg.style.fontWeight = "bold";
        popup_msg.style.textAlign = "center";
        popup_msg.style.textAlign = "center";
        popup_msg.style.textAlign = "center";

    }
    setTimeout(function(){
        loading_func();
    }, 1200);
})

//next button
 next_btn.addEventListener("click",function(){
    loading_func();
 })

//window fires the load event, the first round is prepared automatically
window.addEventListener("load", loading_func);