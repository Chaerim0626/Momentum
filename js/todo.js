const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY="todos";

function saveToDos() {
    //array에 toDos string으로 바꿔서 집어넣기
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDO(newTodo){ //parameter : object

    const li = document.createElement("li");
    li.id = newTodo.id;
    //span생성 후 내용 넣기
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    //button생성 후 내용 넣기
    const button = document.createElement("button");
    button.innerText = "❎";
    button.addEventListener("click", deleteToDo);


    //자식으로 span넣기
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();

    //입력된 값 새로운 변수에 복사
    const newTodo = toDoInput.value;

    toDoInput.value= "";

    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newToDoObj);
    paintToDO(newToDoObj);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


//값 저장하기
const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDO);
}