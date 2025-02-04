const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");

const showError = (input, massage) =>{

    let parentElement = input.parentElement;
    parentElement.classList = "form-control error";
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelector("i")[0];
    const errorsIcon = parentElement.querySelector("i")[1];
    // errorsIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'visible';

};

const checkEmpty = (elements) =>{
    elements.forEach(element => {
        if(element.value == ""){
            showError(element, 'input required');    
        }
    });
}
 
form.addEventListener('submit' ,(event) =>{

    event.preventDefault(); //don't control to me

    // if (username.value == ''){
    //     //console.log("username is emty")
    //     username.parentElement.classList = ' form-control error'
    // }

    // if (email.value == ''){
    //     //console.log("username is emty")
    //     email.parentElement.classList = ' form-control error'
    // }

    // if (password.value == ''){
    //     //console.log("username is emty")
    //     password.parentElement.classList = ' form-control error'
    // }

    // if (confirmPassword.value == ''){
    //     //console.log("username is emty")
    //     confirmPassword.parentElement.classList = ' form-control error'
    // }
    checkEmpty([username, email, password, confirmPassword]);
})