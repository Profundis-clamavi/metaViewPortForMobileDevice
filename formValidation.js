$(document).ready(function () {
    //intinialize form validation

    $("form[name='registration']").validate({
        //specify the validation rules
        rules: {
            // the key name is on the left side is the name of the atribute
            // validation rules are defined on the right side
            firstname: "requied",
            lastname: "required",
            email: {
                required: true,
                //specify that email should be validated by a built in rule
                email: true
            },
            password: {
                required: true,
                minlenth: 5
            }
        },
        //specify validation messages
        message: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please entr a password",
                minlength: "Password must be atleast 5 characters long"
            },
            email: "Please enter a valid email address"
        }
    });
});