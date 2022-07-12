//variables
let count = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// home score
function homeBtn1(){
    count = count + 1
    homeScore.textContent = count
}
function homeBtn2(){
    count = count + 2
    homeScore.textContent = count
}
function homeBtn3(){
    count = count + 3
    homeScore.textContent = count
}

// guest score
function guestBtn1(){
    count = count + 1
    guestScore.textContent = count
}
function guestBtn2(){
    count = count + 2
    guestScore.textContent = count
}
function guestBtn3(){
    count = count + 3
    guestScore.textContent = count
}