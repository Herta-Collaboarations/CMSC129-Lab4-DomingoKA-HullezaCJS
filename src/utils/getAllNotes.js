export default async function getAllNotes() {
    try {
        const endpoint = `http://localhost:3000/notes/`;
        const request = {
            "method": "GET",
        };
        const response = await fetch(endpoint, request);
        const result = await response.json();
        return {"status": response.status, "body": result};    
    } catch(e) {
        return { 
            "status": 500, 
            "body": { "error": "Unable to retrieve notes at this time" } 
        };
    }
} 