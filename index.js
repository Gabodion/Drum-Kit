var buttonsLength = document.querySelectorAll(".drum").length;

for (var count = buttonsLength - 1; count >= 0; count--){
    document.querySelectorAll(".drum")[count].addEventListener("click", handleClick);
    
}
// listen to button clicks
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    compareKeys(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

// compare key letters and play sound
function compareKeys(letter){
    switch (letter) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;                    
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;                            
        default: console.log(buttonInnerHTML);
            
    }
}
// listen to keys pressed
document.addEventListener("keydown", function(event){
    var keyboardKey = event.key;
    compareKeys(keyboardKey);
    buttonAnimation(keyboardKey);
})


// Adding Animations
function buttonAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    // delay of 0.1s
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100)
   
}



// var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();