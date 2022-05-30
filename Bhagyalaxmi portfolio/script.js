function validateform() {
    var name = document.form.name.value;
    var message = document.form.message.value;
    var email = document.form.email.value;
    var phone1 = document.form.phone1.value;
    if (name == null || name == " ") {
        alert("name not filled");
        return false;
    }
    else if (email == null || eml == " ") {
        alert("email not filled");
        return false;
    }
    else if (message == null || msg == " ") {
        alert("message not filled");
        return false;
    }
    else if (phone1 == null || phone == " ") {
        alert("phone1 not filled");
        return false;
    }
}