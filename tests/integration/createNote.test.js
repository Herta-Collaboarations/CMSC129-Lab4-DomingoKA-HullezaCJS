import createNote from "../../src/utils/createNote";

describe("Note Creation", () => {
    test("Correct request body", async () => {
        const {status, body} = await createNote({"title":"Lab Study", "content":"Review TDD"});
        expect(status).toBe(201);
        expect(body).toEqual(
            expect.objectContaining({
                "title": "Lab Study",
                "content": "Review TDD"
            })
        );   
    });
    test("Missing a field", async () => {
        const {status, body} = await createNote({"content":"Review TDD"});
        expect(status).toBe(400);
        expect(body).toEqual({"error": "Title is required"});   
    });
})