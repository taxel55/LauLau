var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var letters = /^[A-Za-z]+$/;

function containsOnlyNumbers(string) {
    return /^[0-9]+$/.test(string);
  }

function validateForm(){
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var name = document.getElementById('name');
    var phoneNumber = document.getElementById('phone');
    var email = document.getElementById('email');
    var birthday = document.getElementById('dob');
    var address = document.getElementById('address');
    var errorMsg = document.getElementById('errorMsg');
    var saveChanges = document.getElementById('save_changes');

    
    if (username.value == "") {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Please Input Your username!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (password.value == "") {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Please Input Your Password!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if(password.value.length<8){
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Password is 8 characters minimum!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (name.value == "") {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Name must be filled"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (!(name.value.match(letters))) {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Name accepts characters only!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (phoneNumber.value == "") {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Please Input Your Phone Number!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (phoneNumber.value.length<12) {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Phone Number is 12 number minimum!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (containsOnlyNumbers(phoneNumber.value)==false) {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Phone Number accepts number only!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (address.value == "") {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Address must be filled"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (email.value == "") {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Please Input Your Email!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if(!(email.value.match(mailformat))){
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Format Invalid!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }else if (!(birthday.value)) {
        errorMsg.style.color="#ef4444"
        errorMsg.innerHTML = "Please Input Your Birthday!"
        saveChanges.style.backgroundColor="#93c5fd"
        saveChanges.disabled = true;
        return false;
    }
    
    errorMsg.style.color="#4ade80"
    errorMsg.innerHTML = "All Good!"
    saveChanges.style.backgroundColor="#1d4ed8"
    saveChanges.disabled = false;
    return true;
}
