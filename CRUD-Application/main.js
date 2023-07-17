
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    if (textInput.value === "") {
        // console.log("Failure")
        msg.innerHTML = "Task Can't be be blank!";

    }
    else {
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        //To remove the add button
        (() => {
            add.setAttribute("data-bs-dismiss", "");
        });
    };
};

let data = [];

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textArea.value,
    });

    localStorage.setItem("data", JSON.stringify(data));
    // console.log(data)
    creatTasks();
};

let creatTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += `
        <div id=${y}>
            <span class="fw-bold">${x.text}</span>
            <span class="sm | text-secondary">${x.date}</span>
            <p>${x.description}</p>
            <span class="options">
              <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa fa-edit"></i>
              <i onClick"delTask(this);creatTasks()" class="fa fa-trash-o"></i>
            </span>
          </div>
        `);
    });
    
    resetForm();
}

let delTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));

};

let editTask =(e) => {
   let selectedTask = e.parentElement.parentElement;

   textInput.value = selectedTask.children[0].innerHTML;
   dateInput.value = selectedTask.children[1].innerHTML;
   textArea.value = selectedTask.children[2].innerHTML;

   delTask(e);
};

let  resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textArea.value = "";

};

//Each time item is added, its push in the 
//array ans save it into the local storage. 
(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    creatTasks();
    // console.log(data);
})();
