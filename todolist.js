const add_button = document.querySelector("#add"),
  input = document.querySelector("#input-box"),
  todo_list = document.querySelector(".list");
let box; // 0: blank -- 1: checked

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //convert tasks from LS

tasks.forEach(function (taskData) {
  const task = createTask(taskData.text, taskData.checked);
  todo_list.appendChild(task);   // make a loop for the taks and the check box here
});

//So I add one more function for the check box in this code

//add button
add_button.addEventListener("click", function () {
  if (input.value !== "") {
    const taskData = {
      text: input.value,
      checked: false 
    };

    tasks.push(taskData);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    const task = createTask(input.value, taskData.checked);
    todo_list.appendChild(task);
    input.value = "";
  }
});

function createTask(taskText, checked) {
//task element  
  const task = document.createElement("div");
  task.innerText = taskText;
  task.classList.add("tasklist");

//check box  
  const checkbox = document.createElement("button");
  checkbox.innerHTML = checked ? '<i class="fa fa-square-check"></i>' : '<i class="fa fa-regular fa-square"></i>'; //else-if function to change results
  checkbox.classList.add("checkbox");
  task.appendChild(checkbox);
  box = checked ? 1 : 0; //1:checked - 0:blank

//checkbox function  
  checkbox.addEventListener("click", function () {
    if (box === 0) {
      checkbox.innerHTML = '<i class="fa fa-square-check"></i>';
      box = 1;
    } else {
      checkbox.innerHTML = '<i class="fa fa-regular fa-square"></i>';
      box = 0;
    }

    const index = Array.from(todo_list.children).indexOf(task);
    tasks[index].checked = box === 1; 

    localStorage.setItem("tasks", JSON.stringify(tasks)); //make an array for the tasks and the checkbox results and store them 
  });

//delete button  
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa fa-solid fa-x"></i>';
  deleteButton.classList.add("delete-tasks");
  task.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    task.remove();
    const index = Array.from(todo_list.children).indexOf(task);
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  return task;
}

//keep checkbox after reload
window.addEventListener("DOMContentLoaded", function () {
  tasks.forEach(function (taskData, index) {
    const checkbox = todo_list.children[index].querySelector(".checkbox");
    checkbox.innerHTML = taskData.checked ? '<i class="fa fa-square-check"></i>' : '<i class="fa fa-regular fa-square"></i>';
    box = taskData.checked ? 1 : 0; //eles-if function for check box to keep the results
  });
});

//ref:
//https://www.youtube.com/watch?v=q0-N_w0Op84
//How to use JSON (parse and stringify) properly by ChatGPT 