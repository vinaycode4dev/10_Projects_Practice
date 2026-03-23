//Selecting Elements
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskContainer = document.getElementById("allTask");

//Listeners

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //extracting text part
    const text=input.value.trim();
    if(text===""){
        alert("Please enter a task!");
        return;
    }

    createTask(text);
    form.reset();
    updateCount();
})
function createTask(text){
    //Creating task list: outer div -> checkbox(done)-> task list (span) -> deletebutton-> edit-
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;
    span.classList.add("task-text");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    //outerDiv mai button or content dalenge
    taskItem.append(checkbox, span, deleteBtn, editBtn);
    //DOM ke andar: allTask ke ander
    taskContainer.append(taskItem);

    //----Listening on buttons: deleting task, done the task
    // Done toggle
    checkbox.addEventListener("change", () => {
        span.classList.toggle("completed");
        updateCount();
    });

    // Delete
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
        updateCount();
    });

    // Edit
    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit task:", span.textContent);
        if(newText){
            span.textContent = newText;
        }
    });
}

function updateCount(){
    const tasks = document.querySelectorAll(".task-item");
    let completed = 0;

    tasks.forEach(task => {
        const check = task.querySelector("input");
        if(check.checked) completed++;
    });

    document.getElementById("count").textContent =
        `Completed: ${completed} | Uncompleted: ${tasks.length - completed}`;
}

const clearBtn = document.getElementById("clearAllBtn");

clearBtn.addEventListener("click", () => {
    while(taskContainer.firstChild){
        taskContainer.removeChild(taskContainer.firstChild);
    }
    updateCount();
});