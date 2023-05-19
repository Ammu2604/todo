function login(event) {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	if (username === 'admin' && password === '12345') {
		window.location.href = 'main.html';
	} else {
		alert('Invalid username or password');
	}
}



let completedTasks = 0;

function loadTodoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = ''; // Clear previous list
            completedTasks = 0; // Reset completed tasks count
            data.forEach(task => {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('task');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `task-${task.id}`;
                checkbox.addEventListener('change', updateCompletedTasks);
                const label = document.createElement('label');
                label.htmlFor = `task-${task.id}`;
                label.textContent = task.title;
                taskDiv.appendChild(checkbox);
                taskDiv.appendChild(label);
                todoList.appendChild(taskDiv);
            });

            if (completedTasks >= 5) {
                showCongratsMessage();
            }
        })
        .catch(error => console.log(error));
}

function updateCompletedTasks(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        completedTasks++;
    } else {
        completedTasks--;
    }

    if (completedTasks >= 5) {
        showCongratsMessage();
    }
}

function showCongratsMessage() {
    alert('Congrats. 5 Tasks have been Successfully Completed');
}

function logout() {
    window.location.href = 'index.html';
}
