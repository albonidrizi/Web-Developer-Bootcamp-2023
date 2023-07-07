
let numberDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberDrumButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (numberDrumButton){    
        this.style.color = "blue";
        if(i === 0 ){

            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        }else if (i === 1 ) {
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        } else if(i === 2){
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        } else if(i === 3){
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        } else if(i === 4){
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        } else if(i === 5){
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        } else if(i === 6){
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        } else if(i === 7){

        } else {
            return null;
        }
  
    });

}

