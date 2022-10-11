// JavaScript of form error

  

function formErrorMessage(formElement, type, message) {
  let elementMessage= formElement.querySelector(".form-message");
  console.log("i am great");
  
  elementMessage.textContent= message;
  elementMessage.classList.remove("form-error-message", "form-success-message");
  elementMessage.classList.add(`form-${type}-message`);
}

// JavaScript of input error

function setInputError(inputElement, message) {
  
  inputElement.classList.add("form-input-error");
  inputElement.parentElement.querySelector(".input-error-messages").textContent = message;
}

function clearInputError(inputElement) {
  
  inputElement.classList.remove("form-input-error");
  inputElement.parentElement.querySelector(".input-error-messages").textContent= "";
}

// JavaScript of password error

function setPasswordError(inputElement, message) {
  
  inputElement.classList.add("form-input-error");
  inputElement.parentElement.querySelector(".input-error-messages").textContent = message;
}

function clearPasswordError(inputElement) {
  
  inputElement.classList.remove("form-input-error");
  inputElement.parentElement.querySelector(".input-error-messages").textContent= "";
}
function setPasswordMatch(inputElement, message) {
  
  inputElement.classList.add("form-input-error");
  inputElement.parentElement.querySelector(".input-error-messages").textContent = message;
}

let basket= {
  password: "",
  email: "",
  name: ""}



//MAIN
document.addEventListener("DOMContentLoaded", ()=> {
  let login= document.querySelector("#login");
  let createAccount =document.querySelector("#createAccount");
  
  document.querySelector("#createAccount-link").addEventListener("click", e =>{
     e.preventDefault();
     login.classList.add("form-hidden");
     createAccount.classList.remove("form-hidden");
  });
  
  
   document.querySelector("#login-link").addEventListener("click", e =>{
     e.preventDefault();
     login.classList.remove("form-hidden");
     createAccount.classList.add("form-hidden");
  });
  
  
  
  login.addEventListener("submit", e=> {
    e.preventDefault();
      let username1 = document.querySelector("#username1");
       let password1 = document.querySelector("#password1");
       console.log(basket.password)
       username1.value= basket.password

    if (username1.value === 5) {
      console.log("you are successful");
    formErrorMessage(login, "error", "invalid username/password combination")
    } else {
      console.log("i did it by the grace of God")
    }
  })
  
  
  
document.querySelectorAll(".form-input").forEach(inputElement => {
  
    inputElement.addEventListener("blur", e => {
      e.preventDefault();
      if (e.target.id === "username" && e.target.value.length >0 && e.target.value.length <10) {
      setInputError(inputElement, "username must be atleast 10 character");
    };
    });
    
    inputElement.addEventListener("input", ()=> {
      clearInputError(inputElement);
    });
    
    inputElement.addEventListener("blur", e=> {
      if (e.target.id === "password" && e.target.value.length >0 && e.target.value.length< 8) {
        setPasswordError(inputElement, "password must contain a lowercase, uppercase,symbol and digits")
      };
    }) 
   
   inputElement.addEventListener("blur", e=> {
      e.preventDefault();
      let password= document.querySelector("#password");
      let confirmPassword= document.querySelector("#confirm-password");

      if (e.target.id === "confirm-password"){ 
        if ( password.value !== confirmPassword.value) {
        console.log("I did it")
          setPasswordMatch(inputElement, "password must match")
        }
      };
    }) 
   
    
  });
  
createAccount.addEventListener("submit", e=>{
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");

    basket.username= username.value
    basket.email= email.value
    basket.password= password.value

    console.log(basket.username)
    return basket ;
  })
  
  console.log(basket.password)
  
});

