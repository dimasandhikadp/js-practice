//JSON initial section
const fs = require("fs");
const filePath = "tasks.json";

//Cek apakah file json ada
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]");
}

//Baca isi file JSON
const data = fs.readFileSync(filePath, "utf-8");

//Ubah isi file JSON ke Array
const tasks = JSON.parse(data);

//Command initial section
const command = process.argv[2];
const value = process.argv[3];

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
      updatedAt: now
    };

    tasks.push(newTask);
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

    console.log("Task Berhasil ditambah ID:", newId);
    break;
  case "list":
    console.log("Menampilkan task...");

    if(tasks.length == 0){
      console.log("Belum ada task.")
    }else{
      tasks.forEach(task => {
        console.log(`${task.id}. [${task.status}] ${task.description}`);
      });
    }

    break;
  case "update":
    console.log("Memperbarui task...");
    break;
  case "delete":
    console.log("Menghapus task...");
    break;
  default:
    console.log("Perintah tidak valid...");
    break;
}