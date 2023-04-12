const add_button = document.querySelector("#add"),
      input = document.querySelector("#input-box"),
      todo_list = document.querySelector(".list");
let box; // 0: blank -- 1: check


add_button.addEventListener ("click", function() {

if (input.value != "") {    
    const tasks = document.createElement("div"),
          inputvalue = input.value;
    tasks.innerText = input.value;
    tasks.classList.add("tasklist");
    todo_list.appendChild(tasks);
    input.value = "";

    localStorage.todo_list = inputvalue;

// checkbox 
    const checkbox = document.createElement("button");
    checkbox.innerHTML = '<i class="fa-regular fa-square"></i>';
    checkbox.classList.add("checkbox");
    tasks.appendChild(checkbox);
    box = 0;

  // donetask
    if (box == 0) {
        checkbox.addEventListener("click", function() {
            checkbox.innerHTML = '<i class="fa fa-square-check"></i>';
            box = 1;
    
  // undonetask
        if (box == 1) {
            checkbox.addEventListener("click", function() {
                checkbox.innerHTML = '<i class="fa-regular fa-square"></i>';
                box = 0;
        })};
})};

// delete
    const deletemark = document.createElement("button");
    deletemark.innerHTML = '<i class="fa-solid fa-x"></i>';
    deletemark.classList.add("delete-tasks");
    tasks.appendChild(deletemark);

    deletemark.addEventListener ("click", function() {
        tasks.remove();
    })
}})


