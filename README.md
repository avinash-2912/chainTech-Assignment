This is a To-Do List application built using Node.js with the Express.js framework and MongoDB as the database. The application allows users to:

Add tasks
View all tasks
Mark tasks as completed
Update task details
Delete tasks
The project ensures validation of input and uses appropriate HTTP status codes with success and error messages.

This Node.js application is deployed on Render and can be accessed through the following URLs:

Base URL: https://chaintech-assignment.onrender.com
Available Endpoints
Add a task (POST): https://chaintech-assignment.onrender.com/user/task  
eg:- req.body = {
    "title":"Title",
    "description":"This is first entry in task"
}
View all tasks (GET): https://chaintech-assignment.onrender.com/user/task
Mark a task as completed (PATCH): https://chaintech-assignment.onrender.com/user/task/mark/:id
Update a task (PUT): https://chaintech-assignment.onrender.com/user/task/:id
eg:- req.body :- {
    "title":"",
    "description":"description changed",
    "isCompleted":false
}
Delete a task (DELETE): https://chaintech-assignment.onrender.com/user/task/:id
Features
Create Task: Add a new task with a title and description.
View Tasks: View a list of all tasks.
Mark as Completed: Mark tasks as completed. The app prevents marking a task as completed if it’s already marked as such.
Edit Task: Edit the title and description of existing tasks.
Delete Task: Remove tasks from the list.
Persistence: Tasks are stored in MongoDB to persist data between sessions.
Validation: Task titles must not be empty, and tasks cannot be marked as completed more than once. Proper error handling is provided for all operations.


To run on local Enivornment:-

step 1-> clone the repo 
step 2-> run command npm install
step 3-> add Database string in env file
step 4-> run node app.js or run nodemon app.js
