const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value;
    if (todoText.trim() !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(todoText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todoText}</span>
        <div class="actions">
            <button class="up-btn">&uarr;</button>
            <button class="down-btn">&darr;</button>
            <button class="update-btn">Update</button>
            <button class="delete-btn">&times;</button>
        </div>
    `;
    todoList.appendChild(li);

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    const upBtn = li.querySelector('.up-btn');
    upBtn.addEventListener('click', function() {
        const prevLi = li.previousElementSibling;
        if (prevLi) {
            todoList.insertBefore(li, prevLi);
        }
    });

    const downBtn = li.querySelector('.down-btn');
    downBtn.addEventListener('click', function() {
        const nextLi = li.nextElementSibling;
        if (nextLi) {
            todoList.insertBefore(nextLi, li);
        }
    });

    const updateBtn = li.querySelector('.update-btn');
    const todoSpan = li.querySelector('span');
    updateBtn.addEventListener('click', function() {
        const updatedText = prompt('Enter the updated text:');
        if (updatedText && updatedText.trim() !== '') {
            todoSpan.textContent = updatedText;
        }
    });
}
