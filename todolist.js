const add_button = document.querySelector("#add"),
      input = document.querySelector("#input-box"),
      todo_list = document.querySelector(".list");



// reference: https://www.youtube.com/watch?v=-pRg_daFjfk&t=371s
add_button.addEventListener ("click", function() {
    let tasks = document.createElement("div");
    tasks.innerText = input.value;
    todo_list.appendChild(tasks);
    input.value = "";

// checkbox & trashcan
    const emptybox = document.createElement("button"),
          checkbox = document.createElement("button");
    
    emptybox.innerHTML = '<span class="fa fa-square"></span>';
    checkbox.innerHTML = '<span class="fa fa-square-check"></span>';

    todo_list.appendChild(emptybox);
    
    const trashcan = document.createElement("button");
    trashcan.innerHTML = '<span class="fa-solid fa-trash-can-xmark"></span>';
    trashcan.classList.add("delete-taks");
    todo_list.appendChild(trashcan);
})

