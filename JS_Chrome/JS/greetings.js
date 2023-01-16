const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const content = document.querySelector("#content");
const HIDDEN_CLASSNAME = "hidden";
const FLEX_CLASSNAME = "flex";
const USER_NAME = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(FLEX_CLASSNAME);
    document.querySelector("#todo-form").classList.remove(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `안녕하세요, ${username}님!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USER_NAME);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(FLEX_CLASSNAME);
    content.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
} else{
    paintGreetings(savedUsername);
    content.classList.remove(HIDDEN_CLASSNAME);
    content.classList.add("flex");
    document.getElementById("todo-form").classList.remove(HIDDEN_CLASSNAME);
}