export default function validateNote(note) {
    return (!note.title.trim() === "" && note.content.length < 1000);
}
