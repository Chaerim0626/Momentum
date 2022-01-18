const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDos = [];


function saveToDos() {
    //array에 toDos string으로 바꿔서 집어넣기
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDO(newTodo){

    const li = document.createElement("li");

    //span생성 후 내용 넣기
    const span = document.createElement("span");
    span.innerText = newTodo;

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

    toDos.push(newTodo);
    paintToDO(newTodo);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);