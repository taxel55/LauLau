var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var letters = /^[A-Za-z]+$/;

function containsOnlyNumbers(string) {
    return /^[0-9]+$/.test(string);
  }

function validateForm(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var fullname = document.getElementById('fullname');
    var phoneNumber = document.getElementById('phoneNumber');
    var birthday = document.getElementById('birthday');
    var confirmPassword = document.getElementById('confirmPassword');
    var errorMsg = document.getElementById('errorMsg');
    var signupButton = document.getElementById('signupButton');
    var disabledButton = document.getElementById('disabledButton');


    if (email.value == "") {
        errorMsg.innerHTML = "Please Input Your Email!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if(!(email.value.match(mailformat))){
        errorMsg.innerHTML = "Format Invalid!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (fullname.value == "") {
        errorMsg.innerHTML = "Please Input Your Fullname!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (!(fullname.value.match(letters))) {
        errorMsg.innerHTML = "Fullname accepts characters only!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (phoneNumber.value == "") {
        errorMsg.innerHTML = "Please Input Your Phone Number!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (phoneNumber.value.length<12) {
        errorMsg.innerHTML = "Phone Number is 12 number minimum!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (containsOnlyNumbers(phoneNumber.value)==false) {
        errorMsg.innerHTML = "Phone Number accepts number only!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (!(birthday.value)) {
        errorMsg.innerHTML = "Please Input Your Birthday!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (password.value == "") {
        errorMsg.innerHTML = "Please Input Your Password!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if(password.value.length<8){
        errorMsg.innerHTML = "Password is 8 characters minimum!"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (confirmPassword.value == "") {
        errorMsg.innerHTML = "Please Confirm Your Password"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }else if (!(confirmPassword.value.match(password.value))) {
        errorMsg.innerHTML = "Password does not match"
        signupButton.style.pointerEvents="none"
        disabledButton.style.backgroundColor="#93c5fd"
        errorMsg.style.color="#ef4444"
        return false;
    }
    errorMsg.style.color="#4ade80"
    errorMsg.innerHTML = "All Good!"
    signupButton.style.pointerEvents="Auto"
    disabledButton.style.backgroundColor="#2251E8"
    return true;
}
