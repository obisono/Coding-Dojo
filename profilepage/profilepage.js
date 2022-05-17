var editProfile = document.querySelector("#edit-profile-name")
console.log(editProfile)
var profileName = document.querySelector("#profile-name")

editProfile.addEventListener("click", () => {
    profileName.innerHTML="Johnny Lawrence" 
})

var spanImage = document.querySelectorAll(".images-1")
console.log(spanImage)
var spanImage2 =  document.querySelectorAll(".images-2")
console.log(spanImage2)

function hide() {
    var div = document.getElementById("alayne");
    div.style.display = "none";
}

function hide() {
    var div = document.getElementById("phil");
    div.style.display = "none";
}