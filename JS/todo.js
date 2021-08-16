const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // const id = parseInt(li.id);
    // const idx = toDos.findIndex(function (toDo) {return toDo.id === id});
    // toDos.splice(idx,1);
    // saveToDos();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value ="";
    const newToDoObj = {
        id : Date.now(),
        text : newToDo
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if (savedToDos != null) {
    const parsedToDo = JSON.parse(savedToDos);
    toDos = parsedToDo;
    // for (let i = 0; i < parsedToDo.length; i++) {
    //     paintToDo(parsedToDo[i]);
    // }
    parsedToDo.forEach(paintToDo);
}