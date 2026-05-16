export default async function createNote(note) {
    try {
        const endpoint = "http://localhost:3000/notes";
        const request = {
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": JSON.stringify(note)
        };
        const response = await fetch(endpoint, request);
        const result = await response.json();
        return {"status": response.status, "body": result};    
    } catch(e) {
        return e.message;
    }
}
