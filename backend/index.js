import express from "express";
import { json } from "express";

const app = express();
app.use(express.json());

// DB is an array that takes in a list of NoteObjects. The index is also the object's ID  
const notesDB = [];
let dbIndex = 0;

app.post("/notes", (req, res) => {
    try {
        const {title, content} = req.body;
        if (!title) {
            res.status(400).send({"error": "Title is required"});
            return;
        }
        if (!content) { 
            res.status(400).send({"error": "Content is required"});
            return;
        }
        notesDB[dbIndex] = {"id": dbIndex, "title": title, "content": content };
        res.status(201).send(notesDB[dbIndex++]);
    } catch (error) {
        res.status(500).send({"error" : error.message})
    }
});

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000")
});

