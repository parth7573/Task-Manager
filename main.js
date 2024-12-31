
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



