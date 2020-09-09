// Get the modal
var loginModal = document.getElementById('login-modal');
var registerModal = document.getElementById('register-modal');
var personalAppModal = document.getElementById('personal-app-modal');
var businessAppModal = document.getElementById('business-app-modal');
var infoFlag = false;


// open and close login modal
$("#login-nav").click(openLogin);
$("#login").click(openLogin);
$(".close").click(closeLogin);
$(".cancelbtn").click(closeLogin);

// open and close login modal
$("#register-nav").click(openRegister);
$(".register-btn").click( function() {
    closeLogin();
    openRegister();
});
$("#close-register").click(closeRegister);

// open and close personal application modal
$("#personal-app-btn").click(openPersonalApp);
$("#close-personal-app").click(closePersonalApp);

// open and close businesss application modal
$("#business-app-btn").click(openBusinessApp);
$("#close-business-app").click(closeBusinessApp);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        closeLogin();
    }
    else if (event.target == registerModal) {
        closeRegister();
    }
    else if (event.target == personalAppModal) {
        closePersonalApp();
    }
    else if (event.target == businessAppModal) {
        closeBusinessApp();
    }
}

$("#info-needed").click( function() {
    if (infoFlag == false)
    {
        $("#info-needed").append(
            `
                <ul>
                    <li>
                        <p class="card-text">Contact information – address, phone number, email</p>
                    </li>
                    <li>
                        <p class="card-text">Driver's license information</p>
                    </li>
                    <li>
                        <p class="card-text">Vehicle and license plate information</p>
                    </li>
                    <li>
                        <p class="card-text">Credit card information – name, number, expiration date and code</p>
                    </li>
                </ul>
            `
        );
        infoFlag = true;
    }
    else 
    {
        $("#info-needed ul").remove();
        infoFlag = false;
    }
});

function openLogin() {
    $("#login-modal").css("display", "block");
}

function openRegister() {
    $("#register-modal").css("display", "block");
}

function openPersonalApp() {
    $("#personal-app-modal").css("display", "block");
}

function openBusinessApp() {
    $("#business-app-modal").css("display", "block");
}

function closeLogin() {
    $("#login-modal").css("display", "none");
}

function closeRegister() {
    $("#register-modal").css("display", "none");
}

function closePersonalApp() {
    $("#personal-app-modal").css("display", "none");
}

function closeBusinessApp() {
    $("#business-app-modal").css("display", "none");
}