const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const text = taskInput.value.trim();
    
    if (text === "") return; 

    const li = document.createElement('li');

   
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
        span.classList.toggle('completed');
    };

    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    
    
    taskList.appendChild(li);

    
    taskInput.value = "";
}


addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});