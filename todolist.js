const add_button = document.querySelector("#add"),
      input = document.querySelector("#input-box"),
      todo_list = document.querySelector(".list");
let box; // 0: blank -- 1: check


const tasks = JSON.parse(localStorage.tasks) || []; //convert tasks from localStorage

tasks.forEach(function(taskText) {
    const task = creatTaskElement(taskText);
    todo_list.appendChild(task);    
});//display tasks


add_button.addEventListener ("click", function() {

    if (input.value != "") {    
    
        tasks.push(input.value);
        localStorage.tasks = JSON.stringify(tasks);
    
        const tasks = createTaskElement(input.value);
        todo_list.appendChild(tasks);
        input.value = "";
    }
});

function createTaskElement(taskText) {
    const task = document.createElement("div");
    task.innerText = taskText;
    task.classList.add("tasklist");

// checkbox
    const checkbox = document.createElement("button");
    checkbox.innerHTML = '<i class="fa-regular fa-square"></i>';
    checkbox.classList.add("checkbox");
    tasks.appendChild(checkbox);
    box = 0;


    checkbox.addEventListener("click", function() {
        if (box == 0) {
            checkbox.innerHTML = '<i class="fa fa-square-check"></i>';
            box = 1;
        } else {
            checkbox.innerHTML = '<i class="fa-regular fa-square"></i>';
            box = 0;
        } 
});

// delete
const deleteButton = document.createElement("button");
deleteButton.innerHTML = '<i class="fa-solid fa-x"></i>';
deleteButton.classList.add("delete-tasks");
task.appendChild(deleteButton);

// Add click event listener to the delete button
deleteButton.addEventListener("click", function() {
    task.remove();

    // Remove the task from the array
    const index = tasks.indexOf(taskText);
    if (index > -1) {
        tasks.splice(index, 1);
    }

    // Save the updated array to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
});

return task;
}


