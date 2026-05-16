import getAllNotes from "../../src/utils/getAllNotes";

describe("Retrieving all Notes", () => {
    test("Retrieve full list", async () => {
        const {status, body} = await getAllNotes();
        expect(status).toBe(200);
        expect(body).toEqual(expect.any(Array));   
    });
    
    test("Server error", async () => {
        const fetchSpy = jest.spyOn(global, "fetch").mockRejectedValueOnce(
            new Error("Network connection lost")
        );
        const {status, body} = await getAllNotes();
        expect(status).toBe(500);
        expect(body).toEqual({"error": "Unable to retrieve notes at this time"});   
    });
})