# Task Tracker CLI

A simple command line task tracker built with JavaScript and Node.js.

This project allows you to add, update, delete, and manage tasks directly from the terminal.  
Task data is stored in a local JSON file.

## Features

- Add a new task
- Update an existing task
- Delete a task
- Mark a task as **in-progress**
- Mark a task as **done**
- List all tasks
- Filter tasks by status

## Tech Stack

- JavaScript
- Node.js
- File System (`fs`) module
- JSON for local data storage

## Project Structure

```bash
task-tracker/
├── script.js
├── package.json
├── .gitignore
└── README.md
```

> `tasks.json` will be created automatically when you run the program.

## How to Run

Make sure you already have **Node.js** installed.

Run commands using:

```bash
node script.js <command> [arguments]
```

## Available Commands

### Add a task

```bash
node script.js add "Buy groceries"
```

### List all tasks

```bash
node script.js list
```

### Update a task

```bash
node script.js update 1 "Buy groceries and cook dinner"
```

### Delete a task

```bash
node script.js delete 1
```

### Mark task as in progress

```bash
node script.js mark-in-progress 1
```

### Mark task as done

```bash
node script.js mark-done 1
```

### List tasks by status

```bash
node script.js list todo
node script.js list in-progress
node script.js list done
```

## Task Format

Each task is stored with the following properties:

- `id`
- `description`
- `status`
- `createdAt`
- `updatedAt`

Example:

```json
{
  "id": 1,
  "description": "Learn JavaScript",
  "status": "todo",
  "createdAt": "2026-04-05T10:00:00.000Z",
  "updatedAt": "2026-04-05T10:00:00.000Z"
}
```

## Notes

- This project uses **synchronous file handling** for simplicity.
- No external libraries are used.
- Built as a beginner-friendly CLI practice project.

## Learning Goals

This project helped me practice:

- Working with command line arguments
- Reading and writing JSON files
- Using Node.js `fs` module
- CRUD operations
- Basic refactoring and code organization

## Future Improvements

Possible improvements for the future:

- Add input validation
- Better error messages
- Support custom command aliases
- Split code into multiple modules