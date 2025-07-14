let tasks = [
    { id: 1, description: 'Estudiar JavaScript', completed: false },
    { id: 2, description: 'Practicar HTML y CSS', completed: true },
    { id: 3, description: 'Leer documentación de Desafío Latam', completed: false }
];

function updateDisplay() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            ${task.description}
            <button onclick="toggleTask(${task.id})">${task.completed ? 'Desmarcar' : 'Marcar'}</button>
            <button onclick="deleteTask(${task.id})">Eliminar</button>
        `;
        taskList.appendChild(li);
    });
    document.getElementById('totalTasks').textContent = tasks.length;
    document.getElementById('completedTasks').textContent = tasks.filter(task => task.completed).length;
}

function addTask() {
    const input = document.getElementById('taskInput');
    const description = input.value.trim();
    if (description) {
        tasks.push({ id: Date.now(), description, completed: false });
        input.value = '';
        updateDisplay();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateDisplay();
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        updateDisplay();
    }
}

window.onload = updateDisplay;
