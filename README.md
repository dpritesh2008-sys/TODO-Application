# Ex03 To-Do List using JavaScript
## Date: 17/08/2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
### index.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Todo Application</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Header Section -->
        <header class="header">
            <div class="header-content">
                <h1>📝 Advanced Todo Application</h1>
                <p class="subtitle">Organize your tasks efficiently</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Input Section -->
            <div class="input-section">
                <div class="input-group">
                    <input 
                        type="text" 
                        id="taskInput" 
                        class="input-field" 
                        placeholder="Add a new task..."
                        autocomplete="off"
                    >
                    <button id="addBtn" class="btn btn-add">Add Task</button>
                </div>
                <div class="filter-buttons">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="active">Active</button>
                    <button class="filter-btn" data-filter="completed">Completed</button>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="stats-section">
                <div class="stat">
                    <span class="stat-label">Total Tasks:</span>
                    <span class="stat-value" id="totalCount">0</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Completed:</span>
                    <span class="stat-value" id="completedCount">0</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Pending:</span>
                    <span class="stat-value" id="pendingCount">0</span>
                </div>
            </div>

            <!-- Tasks List Section -->
            <div class="tasks-section">
                <ul id="todoList" class="todo-list">
                    <!-- Tasks will be dynamically added here -->
                </ul>
                <div id="emptyState" class="empty-state">
                    <p>No tasks yet. Add one to get started! 🚀</p>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons">
                <button id="clearCompleted" class="btn btn-secondary">Clear Completed</button>
                <button id="clearAll" class="btn btn-danger">Clear All</button>
                <button id="exportBtn" class="btn btn-success">Export Tasks</button>
            </div>
        </main>

        <!-- Footer Section -->
        <footer class="footer">
            <div class="footer-content">
                <p>&copy; 2024 Advanced Todo Application. All rights reserved.</p>
                <div class="footer-info">
                    <p><strong>Name:</strong> Ritesh DP</p>
                    <p><strong>Register Number:</strong> 212225040339</p>
                </div>
                <div class="footer-repo">
                    <p><strong>GitHub Repository:</strong> <a href="https://github.com/dpritesh2008-sys/TODO-Application" target="_blank">https://github.com/dpritesh2008-sys/TODO-Application</a></p>
                </div>
            </div>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>

~~~
### script.js
~~~
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --danger-color: #e74c3c;
    --warning-color: #f39c12;
    --dark-color: #2c3e50;
    --light-color: #ecf0f1;
    --gray-color: #95a5a6;
    --border-radius: 8px;
    --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: var(--dark-color);
    line-height: 1.6;
}

.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 900px;
    margin: 0 auto;
    background: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

/* Header Styles */
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px 20px;
    text-align: center;
    box-shadow: var(--box-shadow);
}

.header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    font-weight: 700;
}

.subtitle {
    font-size: 1.1em;
    opacity: 0.9;
    font-weight: 300;
}

/* Main Content */
.main-content {
    flex: 1;
    padding: 30px 20px;
}

/* Input Section */
.input-section {
    margin-bottom: 30px;
}

.input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.input-field {
    flex: 1;
    min-width: 200px;
    padding: 12px 15px;
    border: 2px solid var(--light-color);
    border-radius: var(--border-radius);
    font-size: 1em;
    transition: var(--transition);
}

.input-field:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
}

/* Button Styles */
.btn {
    padding: 12px 20px;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-add {
    background-color: var(--primary-color);
    color: white;
}

.btn-add:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
}

.btn-secondary {
    background-color: var(--gray-color);
    color: white;
}

.btn-secondary:hover {
    background-color: #7f8c8d;
}

.btn-danger {
    background-color: var(--danger-color);
    color: white;
}

.btn-danger:hover {
    background-color: #c0392b;
}

.btn-success {
    background-color: var(--secondary-color);
    color: white;
}

.btn-success:hover {
    background-color: #27ae60;
}

/* Filter Buttons */
.filter-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 8px 16px;
    border: 2px solid var(--light-color);
    background-color: white;
    color: var(--dark-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
}

.filter-btn:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.filter-btn.active {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

/* Stats Section */
.stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-bottom: 30px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: var(--border-radius);
    border-left: 4px solid var(--primary-color);
}

.stat {
    text-align: center;
    padding: 10px;
}

.stat-label {
    display: block;
    color: var(--gray-color);
    font-size: 0.9em;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.stat-value {
    display: block;
    font-size: 2em;
    font-weight: 700;
    color: var(--primary-color);
}

/* Tasks Section */
.tasks-section {
    margin-bottom: 30px;
    min-height: 200px;
}

.todo-list {
    list-style: none;
}

.todo-item {
    display: flex;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #f8f9fa;
    border-left: 4px solid var(--primary-color);
    border-radius: var(--border-radius);
    transition: var(--transition);
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.todo-item:hover {
    box-shadow: var(--box-shadow);
    transform: translateX(5px);
}

.todo-item.completed {
    background-color: #e8f5e9;
    border-left-color: var(--secondary-color);
}

.todo-item.completed .todo-text {
    text-decoration: line-through;
    color: var(--gray-color);
}

/* Todo Checkbox */
.checkbox {
    width: 24px;
    height: 24px;
    margin-right: 15px;
    cursor: pointer;
    accent-color: var(--primary-color);
}

/* Todo Text */
.todo-text {
    flex: 1;
    font-size: 1.05em;
    word-break: break-word;
}

/* Todo Priority */
.priority {
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
}

.priority.high {
    background-color: #ffebee;
    color: #c62828;
}

.priority.medium {
    background-color: #fff3e0;
    color: #e65100;
}

.priority.low {
    background-color: #e8f5e9;
    color: #2e7d32;
}

/* Delete Button */
.delete-btn {
    padding: 6px 12px;
    background-color: var(--danger-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
}

.delete-btn:hover {
    background-color: #c0392b;
    transform: scale(1.05);
}

/* Empty State */
.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: var(--gray-color);
    font-size: 1.2em;
}

.empty-state.hidden {
    display: none;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
}

.action-buttons .btn {
    min-width: 150px;
}

/* Footer Styles */
.footer {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: 30px 20px;
    text-align: center;
    border-top: 4px solid var(--primary-color);
}

.footer-content {
    max-width: 900px;
    margin: 0 auto;
}

.footer-content p {
    margin: 10px 0;
    font-size: 0.95em;
}

.footer-info {
    margin: 15px 0;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
}

.footer-info p {
    font-weight: 500;
    margin: 8px 0;
}

.footer-repo {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-repo a {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.footer-repo a:hover {
    text-decoration: underline;
    color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .header h1 {
        font-size: 2em;
    }

    .input-group {
        flex-direction: column;
    }

    .input-field {
        width: 100%;
    }

    .btn-add {
        width: 100%;
    }

    .stats-section {
        grid-template-columns: 1fr;
    }

    .action-buttons {
        flex-direction: column;
    }

    .action-buttons .btn {
        width: 100%;
    }

    .todo-item {
        flex-direction: column;
        align-items: flex-start;
    }

    .checkbox {
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .delete-btn {
        align-self: flex-end;
        margin-top: 10px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
    }

    .input-section,
    .action-buttons {
        display: none;
    }

    .container {
        box-shadow: none;
    }
}

~~~
## OUTPUT
<img width="372" height="500" alt="image" src="https://github.com/user-attachments/assets/ff51aae0-ea7c-41ab-8292-0d7ad3571a76" />


## RESULT
The program for creating To-do list using JavaScript is executed successfully.
