import getNote from "../../src/utils/getNote";
import createNote from "../../src/utils/createNote";

describe("Fetching a Note ", () => {
    test("Valid Note ID", async () => {
        const seedNote = await createNote({"title":"Lab Study", "content":"Review TDD"});
        const id = seedNote.body.id;

        const {status, body} = await getNote(id);
        expect(status).toBe(200);
        expect(body).toEqual({
            "id": id,
            "title": "Lab Study",
            "content": "Review TDD"
        })        
    });

    test("Invalid ID", async () => {
        const {status, body} = await getNote(-1);
        expect(status).toBe(400);
        expect(body).toEqual({"error": "Invalid ID format"});
    });
})