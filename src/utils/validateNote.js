export default function validateNote(note) {
    if (note.title.trim() === "") {
        return false;
    }
    if (note.content.length > 1000) {
        return false;
    }
    return true;
}
