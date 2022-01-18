const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


function paintToDO(newTodo){

    const li = document.createElement("li");
    const span = document.createElement("span");

    //자식으로 span넣기
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();

    //입력된 값 새로운 변수에 복사
    const newTodo = toDoInput.value;
    toDoInput.value= "";
    paintToDO(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);