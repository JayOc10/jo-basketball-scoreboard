//variables
let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// home score
function addToHome(amount){
     homeCount += amount
    homeScore.textContent = homeCount
}


// guest score
function addToGuest(amount){
     guestCount += amount
    guestScore.textContent = guestCount
}
