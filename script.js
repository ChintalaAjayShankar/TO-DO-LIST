const taskInput = document.getElementById("inputText");
const tasklist = document.getElementById("taskList");

function addTask(){
    const storetextValue = taskInput.value.trim();
    if(storetextValue=="") return;


    const li = document.createElement("li");
    li.innerHTML=`
                    <span>${storetextValue}</span>
                    <button onclick ="toggleTaskCompleted(this)">Done</button>
                    <button onclick = "editTask(this)">Edit</button>
                    <button onclick = "deleteTask(this)">Delete</button>`;
    tasklist.appendChild(li);
    taskInput.value ="";
}

// done:
function toggleTaskCompleted(button){
    const task = button.parentElement;
    task.classList.toggle('completed')
}

// editButton:
function editTask(button){
    const task = button.parentElement;
    const span = task.querySelector("span");
    const newTask = prompt("Edit the Task:" ,span.innerHTML);


    if(newTask!==null){
        span.innerHTML=newTask;
    }
}


// delete:
function deleteTask(button){
    const task = button.parentElement;
    task.remove()
}

