# Advanced Todo Application

A modern, feature-rich Todo Application built with HTML, CSS, and JavaScript. This application helps users manage their tasks efficiently with a beautiful and intuitive user interface.

**Student Name**: Ritesh DP  
**Register Number**: 212225040339

## 🎯 Features

### Core Features
- ✅ **Add Tasks**: Easily add new tasks with a simple input field
- ✅ **Mark Complete**: Check off tasks as you complete them
- ✅ **Delete Tasks**: Remove individual tasks with the delete button
- ✅ **Priority Levels**: Assign priority levels (Low, Medium, High) to tasks
- ✅ **Filter Tasks**: View all tasks, active tasks, or completed tasks
- ✅ **Real-time Statistics**: Track total, completed, and pending tasks
- ✅ **Persistent Storage**: Tasks are saved to browser's localStorage
- ✅ **Export Tasks**: Download tasks as JSON for backup

### Advanced Features
- 🎨 **Modern Design**: Professional gradient-based UI with smooth animations
- 📱 **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- ⌨️ **Keyboard Shortcuts**: 
  - Press Enter to add a task
  - Ctrl+N (Cmd+N on Mac) to focus input
  - Ctrl+L (Cmd+L on Mac) to focus task list
- 🔄 **Task Priority Toggle**: Click on priority badge to cycle through priority levels
- 🗑️ **Clear Operations**: Clear completed tasks or all tasks at once
- 🎯 **Empty State**: Helpful message when no tasks are available

## 📁 Project Structure

```
TODO-Application/
├── index.html       # Main HTML structure
├── styles.css       # Styling and responsive design
├── script.js        # Application logic and functionality
└── README.md        # Project documentation
```

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/dpritesh2008-sys/portfolio.git
cd Exp3/TODO-Application
```

2. Open the application:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     npx http-server
     ```

3. Start managing your tasks!

## 💾 Data Storage

- Tasks are automatically saved to your browser's localStorage
- Data persists even after closing the browser
- Clear your browser's cache to reset tasks

---

## 📝 HTML Code (index.html)

```html
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
```

---

## 🎨 CSS Code (styles.css - Key Sections)

```css
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

/* Footer Styles */
.footer {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: 30px 20px;
    text-align: center;
    border-top: 4px solid var(--primary-color);
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

.footer-repo a {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

/* ... Additional CSS for buttons, inputs, tasks, etc. ... */
```

---

## 🎯 Statistics Panel

The statistics panel at the top shows:
- **Total Tasks**: All tasks in the application
- **Completed**: Tasks marked as complete
- **Pending**: Active, incomplete tasks

---

## 📊 Features Implemented

### Task Management
- ✅ Add new tasks via input
- ✅ Mark tasks complete/incomplete
- ✅ Delete individual tasks
- ✅ Priority levels (Low, Medium, High)

### Filtering
- ✅ Show all tasks
- ✅ Show active tasks only
- ✅ Show completed tasks only

### Data Management
- ✅ Local storage persistence
- ✅ Export tasks as JSON
- ✅ Clear completed tasks
- ✅ Clear all tasks

### User Interface
- ✅ Professional gradient design
- ✅ Smooth animations
- ✅ Responsive layout
- ✅ Real-time statistics
- ✅ Empty state messaging

---

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

---

## 👤 Student Information

- **Name**: Ritesh DP
- **Register Number**: 212225040339
- **GitHub Repository**: https://github.com/dpritesh2008-sys/TODO-Application

---

## 📄 License

This project is open source and available for educational purposes.

---

**Last Updated**: August 17, 2026
