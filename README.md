# Advanced Todo Application

A modern, feature-rich Todo Application built with HTML, CSS, and JavaScript. This application helps users manage their tasks efficiently with a beautiful and intuitive user interface.

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

## 📋 Project Information

- **Name**: Ritesh DP
- **Register Number**: 212225040339
- **GitHub Repository**: https://github.com/dpritesh2008-sys/TODO-Application

## 📁 Project Structure

```
TODO-Application/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Application logic and functionality
└── README.md       # Project documentation
```

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/dpritesh2008-sys/TODO-Application.git
cd TODO-Application
```

2. Open the application:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (npx)
     npx http-server
     ```

3. Start managing your tasks!

## 💾 Data Storage

- Tasks are automatically saved to your browser's localStorage
- Data persists even after closing the browser
- Clear your browser's cache to reset tasks

## 🎨 Design Highlights

### Color Scheme
- **Primary**: #3498db (Blue)
- **Secondary**: #2ecc71 (Green)
- **Danger**: #e74c3c (Red)
- **Background Gradient**: Purple gradient (667eea to 764ba2)

### Responsive Breakpoints
- **Desktop**: Full layout with all features
- **Tablet**: Optimized spacing and button sizes
- **Mobile**: Stacked layout with touch-friendly buttons

## 📝 How to Use

### Adding a Task
1. Type your task in the "Add a new task..." input field
2. Press Enter or click the "ADD TASK" button
3. Task is instantly added to your list

### Marking Tasks Complete
1. Click the checkbox next to any task to mark it complete
2. Completed tasks appear with a strikethrough and green background
3. Statistics are updated automatically

### Filtering Tasks
- **All**: Shows all tasks (default view)
- **Active**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks

### Managing Task Priority
1. Click on the priority badge (Low, Medium, High) to cycle through levels
2. Priority affects task organization and visual appearance
3. High priority tasks appear with red highlighting

### Clearing Tasks
- **Clear Completed**: Removes all completed tasks (with confirmation)
- **Clear All**: Removes all tasks at once (with confirmation)
- **Delete Individual**: Click the Delete button on any task

### Exporting Tasks
1. Click "EXPORT TASKS" button
2. Your tasks will be downloaded as a JSON file
3. File name includes the export timestamp

## 🔧 Technical Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and CSS Grid
- **Vanilla JavaScript**: No dependencies, pure ES6+ JavaScript
- **LocalStorage API**: For persistent data storage
- **Fetch API**: For potential future API integration

## 🎯 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Statistics Panel

The statistics panel at the top shows:
- **Total Tasks**: All tasks in the application
- **Completed**: Tasks marked as complete
- **Pending**: Active, incomplete tasks

## ⚙️ Technical Features

### Security
- XSS Protection: All user input is properly escaped
- LocalStorage Security: No sensitive data is stored
- CSRF Protection: No external API calls without validation

### Performance
- No external dependencies (lightweight)
- Efficient DOM manipulation
- Smooth animations and transitions
- Optimized for fast load times

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color scheme

## 🐛 Known Issues & Limitations

- LocalStorage limited to ~5-10MB depending on browser
- No cloud synchronization (data is device-specific)
- No user authentication system
- No collaborative features

## 🚀 Future Enhancements

- [ ] Add due dates to tasks
- [ ] Implement categories/tags system
- [ ] Add recurring tasks
- [ ] Cloud synchronization
- [ ] Dark mode theme
- [ ] Drag-and-drop to reorder tasks
- [ ] Task notes/descriptions
- [ ] Mobile app version
- [ ] Multi-user support
- [ ] Notifications and reminders

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Ritesh DP**
- Register Number: 212225040339
- GitHub: [@dpritesh2008-sys](https://github.com/dpritesh2008-sys)

## 📧 Contact & Support

For issues, suggestions, or feedback, please open an issue on GitHub or contact the author.

---

**Last Updated**: August 17, 2026

### Version History
- **v1.0.0** (2026-08-17): Initial release with all core features
