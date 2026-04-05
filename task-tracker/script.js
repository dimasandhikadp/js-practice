//JSON initial section
import { existsSync, writeFileSync, readFileSync } from "fs";
const filePath = "tasks.json";

//Cek apakah file json ada
if (!existsSync(filePath)) {
  writeFileSync(filePath, "[]");
}

//Baca isi file JSON
function loadTask() {
  const data = readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

function findTaskById(tasks, id) {
  return tasks.find((task) => task.id === id);
}

function printTask(tasks) {
  if (tasks.length === 0) {
    console.log("Belum ada task.");
    return;
  }

  tasks.forEach((task) => {
    console.log(`${task.id}. [${task.status}] ${task.description}`);
  });
}

function updateTaskStatus(tasks, id, status) {
  const task = findTaskById(tasks, id);

  if (!task) {
    console.log(`Task dengan ID ${id} tidak ditemukan`);
    return;
  }

  task.status = status;
  task.updateTaskStatus = new Date().toISOString();
  saveTasks(tasks);

  console.log(`Task ID ${id} berhadil diubah menjadi ${status}`);
}

const tasks = loadTask();

//Command initial section
const command = process.argv[2];
const value = process.argv[3];
const newDescription = process.argv[4];

switch (command) {
  case "add":
    console.log("Menambahkan task...");

    const now = new Date().toISOString();
    const newId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;

    const newTask = {
      id: newId,
      description: value,
      status: "todo",
      createdAt: now,
      updatedAt: now,
    };

    tasks.push(newTask);
    saveTasks(tasks);

    console.log("Task Berhasil ditambah ID:", newId);
    break;

  case "list":
    console.log("Menampilkan task...");
    printTask(tasks);
    break;

  case "update":
    console.log("Memperbarui task...");
    const taskId = Number(value);
    const taskToUpdate = tasks.find((task) => task.id === taskId);

    if (!taskToUpdate) {
      console.log(`Task dengan ID ${taskId} tidak ditemukan.`);
    } else {
      taskToUpdate.description = newDescription;
      taskToUpdate.updatedAt = new Date().toISOString();

      saveTasks(tasks);
      console.log(`Task ID ${taskId} berhasil diperbaruhi.`);
    }
    break;

  case "delete":
    console.log("Menghapus task...");

    const deleteId = Number(value);
    const taskToDelete = tasks.find((task) => task.id === deleteId);

    if (!taskToDelete) {
      console.log(`Task dengan ID ${deleteId} tidak ditemukan.`);
    } else {
      const filteredTask = tasks.filter((task) => task.id !== deleteId);
      saveTasks(filteredTask);

      console.log(`Task ID ${deleteId} berhasil dihapus.`);
    }
    break;

  case "mark-in-progress":
    console.log("Mengubah task menjadi in-progress...");
    updateTaskStatus(tasks, Number(value), "in-progress");
    break;

  case "mark-done":
    console.log("Mengubah task menjadi done...");
    updateTaskStatus(tasks, Number(value), "done");  
    break;
    
  default:
    console.log("Perintah tidak valid...");
    break;
}
