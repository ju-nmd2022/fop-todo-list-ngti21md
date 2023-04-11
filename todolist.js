const add_button = document.querySelector("#add"),
      input = document.querySelector("#input-box"),
      todo_list = document.querySelector(".list");
let box; // 0: blank -- 1: check


// reference: https://www.youtube.com/watch?v=-pRg_daFjfk&t=371s
add_button.addEventListener ("click", function() {
    const tasks = document.createElement("div");
    tasks.innerText = input.value;
    todo_list.appendChild(tasks);
    input.value = "";

// checkbox 
    const checkbox = document.createElement("button");
    checkbox.innerHTML = '<i class="fa-regular fa-square"></i>';
    checkbox.classList.add("checkbox");
    todo_list.appendChild(checkbox);
    box = 0;

  // donetask
    if (box == 0) {
        checkbox.addEventListener("click", function() {
            checkbox.innerHTML = '<i class="fa fa-square-check"></i>';
            box = 1;
    })};
  // undonetask
    if (box == 1) {
        checkbox.addEventListener("click", function() {
            checkbox.innerHTML = '<i class="fa-regular fa-square"></i>';
            box = 0;
    })};
    
// trashcan
    const deletemark = document.createElement("button");
    deletemark.innerHTML = '<i class="fa-solid fa-x"></i>';
    deletemark.classList.add("delete-tasks");
    todo_list.appendChild(deletemark);
})



