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
darkModeToggle.onclick = toggleDarkMode;}

.app-container {
    max-width: 600px;
    margin: 40px auto;
    background-color: var(--app-bg-light);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;
}

body.dark-mode .app-container {
    background-color: var(--app-bg-dark);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

h1 {
    text-align: center;
    color: var(--primary-color-light); 
    margin: 0;
}

body.dark-mode h1 {
    color: var(--primary-color-dark);
}

h2 {
    color: var(--secondary-color-light);
    border-bottom: 2px solid #e1bee7;
    padding-bottom: 8px;
    margin-top: 30px;
}

body.dark-mode h2 {
    color: var(--secondary-color-dark);
    border-bottom-color: #4a4a4a;
}

#dark-mode-toggle {
    /* Base styling for the toggle button */
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    
    /* Icon styling for light mode (moon icon) */
    background-image: url('https://img.freepik.com/premium-vector/light-mode-dark-mode-icons_324666-266.jpg');
    background-size: 200%;
    background-position: 0 0;
    background-repeat: no-repeat;
    transition: background-position 0.3s ease-in-out;
}

body.dark-mode #dark-mode-toggle {
    /* Icon styling for dark mode (sun icon) */
    background-position: 100% 0;
}

#add-task-area {
    display: flex;
    gap: 10px;
}

#task-input-box {
    width: 100%;
    padding: 12px;
    border: 2px solid var(--input-border-light);
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s, box-shadow 0.3s;
    background-color: var(--app-bg-light);
    color: var(--text-color-light);
}

body.dark-mode #task-input-box {
    border-color: var(--input-border-dark);
    background-color: var(--app-bg-dark);
    color: var(--text-color-dark);
}

#task-input-box:focus {
    outline: none;
    border-color: var(--secondary-color-light); 
    box-shadow: 0 0 8px rgba(142, 36, 170, 0.2); 
}

body.dark-mode #task-input-box:focus {
    border-color: var(--secondary-color-dark);
    box-shadow: 0 0 8px rgba(158, 108, 252, 0.4);
}

#add-task-button {
    padding: 12px 20px;
    border: none;
    background-color: var(--secondary-color-light); 
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

#add-task-button:hover {
    background-color: #6a1b9a; 
    transform: translateY(-2px);
}

body.dark-mode #add-task-button {
    background-color: var(--secondary-color-dark);
    color: #121212;
}

body.dark-mode #add-task-button:hover {
    background-color: #7c4dff;
}

ul {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
}

li {
    padding: 15px;
    background-color: var(--li-bg-light);
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 5px solid var(--li-border-light);
    border-radius: 8px;
    transition: box-shadow 0.3s, background-color 0.3s, border-left-color 0.3s;
}

body.dark-mode li {
    background-color: var(--li-bg-dark);
    border-left-color: var(--li-border-dark);
}

li:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

body.dark-mode li:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

li.completed {
    background-color: var(--completed-bg-light);
    border-left: 5px solid #bdbdbd;
}

body.dark-mode li.completed {
    background-color: var(--completed-bg-dark);
    border-left-color: #616161;
}

li.completed span {
    text-decoration: line-through;
    color: var(--completed-text-light);
}

body.dark-mode li.completed span {
    color: var(--completed-text-dark);
}

.task-buttons button {
    margin-left: 8px;
    cursor: pointer;
    border: 1px solid var(--input-border-light);
    background-color: transparent;
    color: var(--secondary-color-light);
    padding: 6px 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

body.dark-mode .task-buttons button {
    border-color: var(--input-border-dark);
    color: var(--secondary-color-dark);
}

.task-buttons button:hover {
    background-color: var(--secondary-color-light);
    color: white;
}

body.dark-mode .task-buttons button:hover {
    background-color: var(--secondary-color-dark);
    color: #121212;
}

