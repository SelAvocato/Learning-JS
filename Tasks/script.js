const showForm = document.getElementById("showForm")
const form = document.getElementById("taskForm")
const taskText = document.getElementById("taskText")
const addTask = document.getElementById("addTask")
const container = document.getElementById("container")
const close = document.getElementById("close")
const filter = document.getElementById("filter")

const date = new Date()
const month = date.toLocaleString('default', {month: 'long'})
const day = date.getDate();
const year = date.getFullYear();

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

showForm.addEventListener("click", () => {
    form.style.display = "block"
})

form.addEventListener("submit", event => {
    event.preventDefault();

    const task = {
        taskName: taskText.value,
        status: "pending",
        createdAt: `${month} ${day}, ${year}`
    }
    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
    displayTasks()
    form.style.display = "none"
})

function displayTasks(){
    container.innerHTML = ""

    for(let i = 0; i < tasks.length; i++){
        const task = tasks[i]

        if (filter.value !== "all" && task.status !== filter.value){
            continue;
        } 
        const card = document.createElement("div");
        card.classList.add("card")

        const taskName = document.createElement("p")
        taskName.textContent = task.taskName

        const statusText = document.createElement("p")
        switch(task.status){
            case("pending"):
                statusText.classList.add("pending");
                break;
            case("active"):
                statusText.classList.add("active");
                break;
            case("completed"):
                statusText.classList.add("completed");
                break;
        }
        statusText.id = "status"
        statusText.textContent = task.status

        statusText.addEventListener("click",() => {
            if(task.status === "pending")task.status = "active";
            else if(task.status === "active") task.status = "completed";
            else if(task.status === "completed") task.status = "pending";

            localStorage.setItem('tasks', JSON.stringify(tasks))
            displayTasks();
        })

        const createdAtText = document.createElement("p")
        createdAtText.textContent = task.createdAt

        card.appendChild(taskName)
        card.appendChild(statusText)
        card.appendChild(createdAtText)

        container.appendChild(card)
    }
}

filter.addEventListener("change", () => {
    displayTasks()
})

close.addEventListener("click", () => form.style.display = "none")
displayTasks()
