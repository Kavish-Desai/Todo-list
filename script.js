document.addEventListener('DOMContentLoaded', function () {
    let newTaskInput = document.getElementById('new-task');
    let addButton = document.querySelector('button');
    let incompleteTasks = document.getElementById('incomplete-tasks');
    let completedTasks = document.getElementById('completed-tasks');
    let clearButton = document.getElementById('clear');

    // Function to create a new task
    function createNewTask(task) {
        let listItem = document.createElement('li');
        let checkBox = document.createElement('input');
        let label = document.createElement('label');
        let editInput = document.createElement('input');
        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        checkBox.type = 'checkbox';
        editInput.type = 'text';

        editButton.innerText = 'Edit';
        editButton.className = 'edit';
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete';

        label.innerText = task;

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    // Function to add a new task
    function addTask() {
        if (newTaskInput.value === '') {
            alert('Please enter a task!');
            return;
        }

        let listItem = createNewTask(newTaskInput.value);
        incompleteTasks.appendChild(listItem);
        bindTaskEvents(listItem, completeTask);

        newTaskInput.value = '';
    }

    // Function to edit an existing task
    function editTask() {
        let listItem = this.parentNode;
        let editInput = listItem.querySelector('input[type=text]');
        let label = listItem.querySelector('label');
        let containsClass = listItem.classList.contains('editMode');

        if (containsClass) {
            label.innerText = editInput.value;
        } else {
            editInput.value = label.innerText;
        }

        listItem.classList.toggle('editMode');
    }

    // Function to delete a task
    function deleteTask() {
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        ul.removeChild(listItem);
    }

    // Function to mark a task as complete
    function completeTask() {
        let listItem = this.parentNode;
        completedTasks.appendChild(listItem);
        bindTaskEvents(listItem, incompleteTask);
    }

    // Function to mark a task as incomplete
    function incompleteTask() {
        let listItem = this.parentNode;
        incompleteTasks.appendChild(listItem);
        bindTaskEvents(listItem, completeTask);
    }

    // Function to bind task events
    function bindTaskEvents(taskListItem, checkBoxEventHandler) {
        let checkBox = taskListItem.querySelector('input[type=checkbox]');
        let editButton = taskListItem.querySelector('button.edit');
        let deleteButton = taskListItem.querySelector('button.delete');

        editButton.onclick = editTask;
        deleteButton.onclick = deleteTask;
        checkBox.onchange = checkBoxEventHandler;
    }

    // Event listener for adding a new task
    addButton.addEventListener('click', addTask);

    // Event listener for editing and deleting tasks
    for (let i = 0; i < incompleteTasks.children.length; i++) {
        bindTaskEvents(incompleteTasks.children[i], completeTask);
    }

    // Event listener for clearing all tasks
    clearButton.addEventListener('click', function () {
        incompleteTasks.innerHTML = '';
        completedTasks.innerHTML = '';
    });
});