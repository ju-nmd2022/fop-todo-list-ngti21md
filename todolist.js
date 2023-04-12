const add_button = document.querySelector("#add"),
      input = document.querySelector("#input-box"),
      todo_list = document.querySelector(".list");
let box; // 0: blank -- 1: check

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];// convert tasks from LS

tasks.forEach(function(taskText) {
    const task = createTaskElement(taskText);
    todo_list.appendChild(task);
});// display tasks

add_button.addEventListener ("click", function() {
    if (input.value != "") {
        tasks.push(input.value);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        const task = createTaskElement(input.value);
        todo_list.appendChild(task);
        input.value = "";
    }
});

function createTaskElement(taskText) {
    // task element
    const task = document.createElement("div");
    task.innerText = taskText;
    task.classList.add("tasklist");

    // checkbox 
    const checkbox = document.createElement("button");
    checkbox.innerHTML = '<i class="fa-regular fa-square"></i>';
    checkbox.classList.add("checkbox");
    task.appendChild(checkbox);
    box = 0;

    // checkbox function
    checkbox.addEventListener("click", function() {
        if (box == 0) {
            checkbox.innerHTML = '<i class="fa fa-square-check"></i>';
            box = 1;
        } else {
            checkbox.innerHTML = '<i class="fa-regular fa-square"></i>';
            box = 0;
        }
    });

    // delete button 
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-x"></i>';
    deleteButton.classList.add("delete-tasks");
    task.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        task.remove();

        // remove the task from the array
        const index = tasks.indexOf(taskText);
        if (index > -1) {
            tasks.splice(index, 1);
        }

        // save the updated array to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    return task;
}

//ref:
//https://www.youtube.com/watch?v=q0-N_w0Op84
//How to use JSON properly by ChatGPT 