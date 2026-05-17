import express from "express";
import { json } from "express";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json());


function validateNoteID(req, res, next) {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id) || id < 0) {
        return res.status(400).send({ "error": "Invalid ID format" });
    }
    req.parsedId = id; 
    next();
}


// DB is an array that takes in a list of NoteObjects. The index is also the object's ID  
const notesDB = [];
let dbIndex = 0;

app.get("/notes", (req, res) => {
    try {
        res.status(200).send(notesDB);
    } catch (e) {
        res.status(500).send({"error" : "Unable to retrieve notes at this time"});
    }
})

app.get("/notes/:id", validateNoteID, (req, res) => {
    try {
        const id = req.parsedId;

        if (notesDB[id]) {
            res.status(200).send(notesDB[id]);
        } else {
            res.status(404).send({ "error": "Note ID not found" });
        }
        
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
});

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

app.put("/notes/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const result = req.body;
        
        if (notesDB[id]) {
            notesDB[id] = {...result, "id": id};
            res.status(200).send(notesDB[id]);
        } else {
            res.status(404).send({ "error": "Note ID not found" });
        }
    } catch (error) {
        res.status(500).send({"error" : error.message})
    }
});

app.delete("/notes/:id", validateNoteID, (req, res) => {
    try {
        const id = req.parsedId;

        if (notesDB[id]) {
            const result = notesDB[id];
            notesDB[id] = undefined;
            res.status(200).send(result);
        } else {
            res.status(404).send({ "error": "Note ID not found" });
        }
        
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
});

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000")
});

