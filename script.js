var inputBox = document.getElementById("task-input-box");
var addBtn = document.getElementById("add-task-button");
var darkModeToggle = document.getElementById("dark-mode-toggle");

var tasksToDoList = document.getElementById("pending-list");
var tasksDoneList = document.getElementById("completed-list");

function addNewTask() {
    var theTaskText = inputBox.value;

    if (theTaskText === "") {
        alert("please add a task");
        return;
    }

    var newTaskItem = document.createElement("li");
    
    var textElement = document.createElement("span");
    textElement.innerText = theTaskText;

    var allButtons = document.createElement("div");
    allButtons.className = 'task-buttons';

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
        newTaskItem.remove();
    };

    var completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.onclick = function() {
        tasksDoneList.appendChild(newTaskItem);
        newTaskItem.classList.add("completed");
        completeBtn.remove();
    };

    newTaskItem.appendChild(textElement);
    
    allButtons.appendChild(completeBtn);
    allButtons.appendChild(deleteBtn);
    
    newTaskItem.appendChild(allButtons);

    tasksToDoList.appendChild(newTaskItem);

    inputBox.value = "";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var isDarkMode = document.body.classList.contains("dark-mode");
    darkModeToggle.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
}

addBtn.onclick = addNewTask;
darkModeToggle.onclick = toggleDarkMode;
