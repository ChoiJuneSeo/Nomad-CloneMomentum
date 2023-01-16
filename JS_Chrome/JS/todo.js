const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
    
};

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const btn = document.createElement("button");
    btn.innerText = "❌"
    btn.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);

    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit" , handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}





