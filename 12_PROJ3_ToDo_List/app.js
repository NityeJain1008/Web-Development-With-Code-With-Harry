const addTodoBtn = document.getElementById("addTodoBtn") ; 
let inputTag = document.getElementById("todoInput") ;
let todoListUl = document.getElementById("todoList") ; 
let todoText ; 
let todos = [] ; 
let todosString = localStorage.getItem("todos") ; 

if(todosString){
    todos = JSON.parse(todosString) ; 
}

const populateTodos = ()=>{
    let string = "" ;
    for(const todo of todos){
        string += `<li id="todo-${todo.id}" class="todo-item ${todo.isCompleted? "completed":""}">
                    <input type="checkbox" class="todo-checkbox" ${todo.isCompleted? "checked":""} >
                    <span class="todo-text">${todo.title}</span>
                    <button class="delete-btn">×</button>
                  </li>`
    }
    todoListUl.innerHTML =  string ; 
    // console.log(todo.isCompleted? "checked":"") ; 
}


addTodoBtn.addEventListener("click", ()=>{
    console.log("clicked") ; 
    todoText = inputTag.value ; 
    console.log(todoText) ; 
    inputTag.value = "" ; 
    let todo = {
        id: todos.length,
        title : todoText,
        isCompleted : false 
    }
    todos.push(todo) ; 
    localStorage.setItem("todos", JSON.stringify(todos)) ; 
    populateTodos() ; 
    
})

populateTodos() ; 
const todoCheckboxes = document.querySelectorAll(".todo-checkbox")

todoCheckboxes.forEach(element => {
    console.log(element) ; 
    element.addEventListener("click", (e)=>{
        if(e.target.checked){
            element.parentNode.classList.add("completed") ;
            todos = todos.map(todo =>{
                if("todo-" + todo.id == element.parentNode.id){
                    return {...todo, isCompleted:true} ; 
                }
                else{
                    return todo ; 
                }
            })
            
        }
        else{
            element.parentNode.classList.remove("completed") ;
            todos = todos.map(todo =>{
                if("todo-" + todo.id == element.parentNode.id){
                    return {...todo, isCompleted:false} ; 
                }
                else{
                    return todo ; 
                }
            })
        }
        localStorage.setItem("todos", JSON.stringify(todos)) ; 
    })
});

document.getElementById("itemsLeft").innerHTML = `${todos.length} Items Left` ;

let delbtn = document.querySelectorAll(".delete-btn") ; 

delbtn.forEach(element =>{
    element.addEventListener("click", (e)=>{
    const todoId = Number(e.target.parentNode.id.replace("todo-", ""));

    todos = todos.filter(todo => todo.id !== todoId);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.target.parentNode.remove();
    })
})
