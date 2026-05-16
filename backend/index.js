import express from "express";
import { json } from "express";

const app = express();
app.use(express.json());

// DB is an array that takes in a list of NoteObjects. The index is also the object's ID  
const notesDB = [];
let dbIndex = 0;

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000")
});

