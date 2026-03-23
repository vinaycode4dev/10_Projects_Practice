//Selecting Elements
const form=document.querySelector('form');
const tasks=document.querySelector('#allTask');
const input=document.querySelector('input');

//Listener
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //extracting text part
    const text=input.value.trim();
    if(text===""){
        alert("Please enter a task!");
        return;
    }
    //Creating task list: outer div -> task list (span) -> donebutton-> edit-> deletebutton 
    const outerDiv=document.createElement('div');
   
    const taskList=document.createElement('span');
    taskList.textContent=text;

    const doneBtn=document.createElement('button');
    doneBtn.textContent="Done";
    
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent="Delete";
  
    //Styling
    outerDiv.classList.add("task-item");
    taskList.classList.add("task-text");
    doneBtn.classList.add("done-btn");
    deleteBtn.classList.add("delete-btn");

    //outerDiv mai button or content dalenge
    outerDiv.append(taskList,doneBtn,deleteBtn);

    //DOM ke andar: allTask ke ander
    tasks.append(outerDiv);

    //Listening on buttons: deleting task, done the task
    deleteBtn.addEventListener('click',()=>{
        outerDiv.remove();
    })

    doneBtn.addEventListener('click',()=>{
        taskList.classList.toggle("completed");
    })

    form.reset();
})