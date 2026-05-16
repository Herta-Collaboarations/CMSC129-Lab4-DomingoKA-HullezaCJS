export default async function deleteNote(id) {
    try {
        const endpoint = `http://localhost:3000/notes/${id}`;
        const request = {
            "method": "DELETE",
        };
        const response = await fetch(endpoint, request);
        const result = await response.json();
        console.log(response.status);
        return {"status": response.status, "body": result};    
    } catch(e) {
        return { 
            "status": 500, 
            "body": { "error": "Unable to delete a note at this time" } 
        };
    }
}