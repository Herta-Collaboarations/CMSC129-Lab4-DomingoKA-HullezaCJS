export default async function getNote(id) {
    try {
        const endpoint = `http://localhost:3000/notes/${id}`;
        const request = {
            "method": "GET",
        };
        const response = await fetch(endpoint, request);
        const result = await response.json();
        console.log(response.status);
        return {"status": response.status, "body": result};    
    } catch(e) {
        return { 
            "status": 500, 
            "body": { "error": "Unable to retrieve a note at this time" } 
        };
    }
}