import editNote from "../../src/utils/editNote";
import createNote from "../../src/utils/createNote";

describe("Edit Note", () => {
    test("Valid update", async () => {
        const seedNote = await createNote({"title":"Lab Study", "content":"Review TDD"});
        const id = seedNote.body.id;

        const {status, body} = await editNote(id, {"title": "Lab Study", "content": "Updated content"});
        expect(status).toBe(200);
        expect(body).toEqual(
            expect.objectContaining({
                "title": "Lab Study",
                "content": "Updated content"
            })
        );              
    });

    test("Non-existent ID", async () => {
        const {status, body} = await editNote(999, {"title": "Ghost Note", "content": "Wah"});
        expect(status).toBe(404);
        expect(body).toEqual({"error": "Note ID not found"});   
    });
})
