var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function validateForm(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var errorMsg = document.getElementById('errorMsg');
    var signinButton = document.getElementById('signinButton');
    var disabledButton = document.getElementById('disabledButton');


    if (email.value == "") {
        errorMsg.innerHTML = "Please Input Your Email!"
        signinButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if(!(email.value.match(mailformat))){
        errorMsg.innerHTML = "Format Invalid!"
        signinButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (password.value == "") {
        errorMsg.innerHTML = "Please Input Your Password!"
        signinButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if(password.value.length<8){
        errorMsg.innerHTML = "Password is 8 characters minimum!"
        signinButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }
    errorMsg.style.color="#4ade80"
    errorMsg.innerHTML = "All Good!"
    signinButton.style.pointerEvents="Auto"
    disabledButton.style.backgroundColor="#1d4ed8"
    return true;
}
