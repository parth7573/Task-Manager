


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
