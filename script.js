
const tasks = []; 

function addTask(task) {
    try {
        if (!task.title || !task.dueTime || !task.priority) {
            throw new Error("Task must have title, dueTime, and priority.");
        }
        tasks.push(task);
        console.log("Task added:", task);
    } catch (error) {
        console.error("Error adding task:", error.message);
    }
}


function sortTasksByPriority() {
    tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    console.log("Sorted tasks:", tasks);
}

function getTasksDueWithin(minutes) {
    const dueTasks = tasks.filter(task => task.dueTime <= minutes);
    console.log(`Tasks due within ${minutes} minutes:`, dueTasks);
    return dueTasks;
}


window.addTask = addTask;
window.sortTasksByPriority = sortTasksByPriority;
window.getTasksDueWithin = getTasksDueWithin;
window.tasks = tasks;


main.js




const titleInput = document.getElementById("title");
const dueTimeInput = document.getElementById("dueTime");
const prioritySelect = document.getElementById("priority");
const addTaskButton = document.getElementById("add-task-button");
const sortButton = document.getElementById("sort-button");
const dueTasksButton = document.getElementById("due-tasks-button");
const taskList = document.getElementById("task-list");
const scheduleRemindersButton = document.getElementById("schedule-reminders-button");


addTaskButton.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const dueTime = parseInt(dueTimeInput.value);
    const priority = prioritySelect.value;

    if (!title || isNaN(dueTime) || !priority) {
        alert("Please provide a valid title, due time, and priority.");
        return;
    }

  
    addTask({ title, dueTime, priority });
    updateTaskList(); 

    // Clear input fields
    titleInput.value = '';
    dueTimeInput.value = '';
    prioritySelect.value = 'Medium';
});


sortButton.addEventListener("click", () => {
    sortTasksByPriority();
    updateTaskList();  
});


dueTasksButton.addEventListener("click", () => {
    const dueTasks = getTasksDueWithin(10);
    updateTaskList(dueTasks);  
});

scheduleRemindersButton.addEventListener("click", () => {
    alert("Reminders are scheduled!");
});


function updateTaskList(filteredTasks = tasks) {
    taskList.innerHTML = '';  

    if (filteredTasks.length === 0) {
        taskList.innerHTML = "<li>No tasks available</li>";
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} (Due in ${task.dueTime} minutes, Priority: ${task.priority})`;
        taskList.appendChild(li);
    });
}
