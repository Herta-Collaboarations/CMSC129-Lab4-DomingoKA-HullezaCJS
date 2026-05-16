export default async function editNode(id, note) {
    try {
        const endpoint = `http://localhost:3000/notes/${id}`;
        const request = {
            "method": "PUT",
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