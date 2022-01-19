// Function
// loginButton.onclick = function () {
    // if (loginButton.innerText == 'Login') {
        //   loginButton.innerText = "Logout";
        //     } else if (loginButton.innerText == 'Logout') {
            //         loginButton.innerText = "Login";
            //     }
            // }
function myName (name) {
    // the code is in here for twhat happens when you call this function 
    alert(name);
}

myName('oliver');
// The equation below is for targeting tags or elements more than once.
var loginButton = document.querySelector('.login-btn')

function changeName () {
    loginButton.innerText = "Logout";
    // document.querySelector('.login-btn').innerText = "Logout";
}

loginButton.onclick = changeName


// The equation below is for targeting tags or elements, no more than once.
loginButton.onclick =  () => {
        loginButton.innerText = "Logout";
        // document.querySelector('.login-btn').innerText = "Logout";
}

var Like1 = document.querySelector('.like-1')
Like1.onclick =  () => {
    alert('Ninja was liked.')
}

var Like2 = document.querySelector('.like-2')
Like2.onclick =  () => {
    Like2.innerText = "38 Likes";
}

var Definition = document.querySelector('.Add-Definition')
Definition.onclick =  () => {
    Definition.innerText = "";
}