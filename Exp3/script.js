// Todo Application - JavaScript Functionality

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');
const clearAllBtn = document.getElementById('clearAll');
const exportBtn = document.getElementById('exportBtn');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');

// App State
let tasks = [];
let currentFilter = 'all';

// Initialize App
function init() {
    loadTasks();
    renderTasks();
    setupEventListeners();
    updateStats();
}

// Setup Event Listeners
function setupEventListeners() {
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderTasks();
        });
    });

    clearCompletedBtn.addEventListener('click', clearCompleted);
    clearAllBtn.addEventListener('click', clearAllTasks);
    exportBtn.addEventListener('click', exportTasks);
}

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        priority: 'medium',
        createdAt: new Date().toLocaleString(),
        completedAt: null
    };

    tasks.push(task);
    taskInput.value = '';
    taskInput.focus();
    saveTasks();
    renderTasks();
    updateStats();
}

// Delete a task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        updateStats();
    }
}

// Toggle task completion
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        task.completedAt = task.completed ? new Date().toLocaleString() : null;
        saveTasks();
        renderTasks();
        updateStats();
    }
}

// Change task priority
function changePriority(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        const priorities = ['low', 'medium', 'high'];
        const currentIndex = priorities.indexOf(task.priority);
        task.priority = priorities[(currentIndex + 1) % priorities.length];
        saveTasks();
        renderTasks();
    }
}

// Render tasks based on filter
function renderTasks() {
    todoList.innerHTML = '';

    let filteredTasks = tasks;

    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `todo-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="checkbox" 
                ${task.completed ? 'checked' : ''}
                onchange="toggleTask(${task.id})"
            >
            <span class="priority ${task.priority}" onclick="changePriority(${task.id})">${task.priority}</span>
            <span class="todo-text" title="${task.text}">${escapeHtml(task.text)}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Update statistics
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;
}

// Clear completed tasks
function clearCompleted() {
    if (tasks.some(task => task.completed)) {
        if (confirm('Delete all completed tasks?')) {
            tasks = tasks.filter(task => !task.completed);
            saveTasks();
            renderTasks();
            updateStats();
        }
    } else {
        alert('No completed tasks to clear!');
    }
}

// Clear all tasks
function clearAllTasks() {
    if (tasks.length > 0) {
        if (confirm('Delete ALL tasks? This cannot be undone!')) {
            tasks = [];
            saveTasks();
            renderTasks();
            updateStats();
        }
    } else {
        alert('No tasks to clear!');
    }
}

// Export tasks
function exportTasks() {
    if (tasks.length === 0) {
        alert('No tasks to export!');
        return;
    }

    const exportData = {
        exportDate: new Date().toLocaleString(),
        totalTasks: tasks.length,
        completedTasks: tasks.filter(t => t.completed).length,
        tasks: tasks
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tasks_${new Date().getTime()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('Tasks exported successfully!');
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('todoAppTasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const saved = localStorage.getItem('todoAppTasks');
    tasks = saved ? JSON.parse(saved) : [];
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl + N or Cmd + N - Focus input
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        taskInput.focus();
    }
    
    // Ctrl + L or Cmd + L - Toggle focus on list
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        todoList.focus();
    }
});

console.log('Todo Application initialized successfully!');
