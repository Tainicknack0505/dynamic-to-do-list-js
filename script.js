

// Build a Dynamic To-Do List Application
// Waiting for the DOM to fully load
document.addEventListener('DOMContentLoaded', () =>{

    // Selecting the "Add Task" button
    const addButton = document.getElementById('add-task-btn');

    // Selecting the input field and task list
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {

        // Retrieving and trimming the value from the task input field
        const taskText = taskInput.value.trim();

        // checking if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Creating a new list item element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Creating a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Event listener for the remove button
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Appending the remove button to the list item
        listItem.appendChild(removeButton);

        // Appending the list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for the "Enter" key pressin the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            // Invoking addTask on DOMContentLoaded
            addTask();
        }
    });
});

// Implement Local Storage for the To-Do List
// Waiting for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    document.getElementById('add-task-button').addEventListener('click', () => {
        const taskInput = document.getElementById('task-input');
        const taskText = task.Input.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });
});

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to local storage
}

function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        removeTask(taskText);
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('task') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('task', JSON.stringify(storedTasks));
    }
}

function removeTask(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task =>task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}