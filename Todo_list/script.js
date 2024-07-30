document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(todo => {
        addTodoToDOM(todo.text, todo.completed);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const todoText = input.value.trim();
        if (todoText) {
            addTodoToDOM(todoText);
            saveTodoToLocalStorage(todoText);
            input.value = '';
        }
    });

    function addTodoToDOM(text, completed = false) {
        const li = document.createElement('li');
        li.textContent = text;
        if (completed) {
            li.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTodoFromLocalStorage(text);
            todoList.removeChild(li);
        });

        li.addEventListener('click', function () {
            li.classList.toggle('completed');
            updateTodoStatusInLocalStorage(text, li.classList.contains('completed'));
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    function saveTodoToLocalStorage(text) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push({ text, completed: false });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function deleteTodoFromLocalStorage(text) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter(todo => todo.text !== text);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function updateTodoStatusInLocalStorage(text, completed) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const todoIndex = todos.findIndex(todo => todo.text === text);
        if (todoIndex > -1) {
            todos[todoIndex].completed = completed;
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});