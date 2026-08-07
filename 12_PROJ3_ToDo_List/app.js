const addTodoBtn = document.getElementById("addTodoBtn");
let inputTag = document.getElementById("todoInput");
let todoListUl = document.getElementById("todoList");
let todoText;
let todos = [];
let todosString = localStorage.getItem("todos");

if (todosString) {
    todos = JSON.parse(todosString);
}

const populateTodos = () => {
    let string = "";

    for (const todo of todos) {
        string += `
            <li id="${todo.id}" class="todo-item ${todo.isCompleted ? "completed" : ""}">
                <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
                <span class="todo-text">${todo.title}</span>
                <button class="delete-btn">×</button>
            </li>
        `;
    }

    todoListUl.innerHTML = string;

    let delbtn = document.querySelectorAll(".delete-btn");
    delbtn.forEach(element => {
        
        element.addEventListener("click", (e) => {
            
            const confirmation = confirm("Do you want to delete this Task ?")
            if(confirmation){
                const todoId = Number(e.target.parentNode.id);

                todos = todos.filter(todo => todo.id !== todoId);

                localStorage.setItem("todos", JSON.stringify(todos));

                e.target.parentNode.remove();
            }
            
            document.getElementById("itemsLeft").innerHTML = todos.filter((item)=>{return item.isCompleted !== true}).length + " Items Left";
        });
    });

    const todoCheckboxes = document.querySelectorAll(".todo-checkbox")

    todoCheckboxes.forEach(element => {
        console.log(element);
        element.addEventListener("click", (e) => {
            // const todoId = Number(
            //     e.target.parentNode.id.replace("todo-", "")
            // );
            if (e.target.checked) {
                element.parentNode.classList.add("completed");
                todos = todos.map(todo => {
                    if (todo.id == element.parentNode.id) {
                        return { ...todo, isCompleted: true };
                    }
                    else {
                        return todo;
                    }
                })
                document.getElementById("itemsLeft").innerHTML = todos.filter((item)=>{return item.isCompleted !== true}).length + " Items Left";

            }
            else {
                element.parentNode.classList.remove("completed");
                todos = todos.map(todo => {
                    if (todo.id == element.parentNode.id) {
                        return { ...todo, isCompleted: false };
                    }
                    else {
                        return todo;
                    }
                })
                document.getElementById("itemsLeft").innerHTML = todos.filter((item)=>{return item.isCompleted !== true}).length + " Items Left";

            }
            localStorage.setItem("todos", JSON.stringify(todos));
        })

        document.getElementById("itemsLeft").innerHTML = todos.filter((item)=>{return item.isCompleted !== true}).length + " Items Left";

    });


};

addTodoBtn.addEventListener("click", () => {
    todoText = inputTag.value;
    let totext = todoText.trim() ;
    if(totext.length < 4){
        alert("You got a small Task !")
        return ; 
    } 
    
    console.log("clicked");
    console.log(todoText);
    let todo = {
        id: Date.now(),
        title: todoText,
        isCompleted: false
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    inputTag.value = "";
    populateTodos();

})


document.getElementById("clearCompletedBtn").addEventListener("click", (e) => {
    todos = todos.filter(todo => !todo.isCompleted);

    localStorage.setItem("todos", JSON.stringify(todos));

    populateTodos();
})

populateTodos(); 
