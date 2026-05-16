import validateNote from "../../src/utils/validateNote";

describe("Note Validation", () => {
    test("Note title is empty", () => {
        expect(validateNote({"title": "", "content": "This is a content"})).toBe(false);
    });
    test("Note title is a whitespace character", () => {
        expect(validateNote({"title": " \n\t\r", "content": "WHITESPACE!"})).toBe(false);
    });
    test("Note description is too long (exceeds 1000 characters)", () => {
        expect(validateNote({"title": "Very Long Content", "content": "Some video games are a fun distraction, but Persona 5 is an obsession. From the very second the neon-red aesthetic slashes across the screen, it demands your attention. My love for this game isn't just about the flawless turn-based combat or the addictive loop of managing a high schooler's social life by day and stealing the corrupt hearts of societal villains by night. It is about how deeply the game resonates on an emotional and artistic level. Every single element feels meticulously crafted. The jazz-infused soundtrack by Shoji Meguro acts as the literal heartbeat of Tokyo, making even a simple rainy day trip to a cafe feel incredibly cozy and cinematic. The UI isn't just a menu; it is a masterclass in stylish, punk-rock visual design. But what truly stole my heart is the Phantom Thieves. Watching this group of misfits and outcasts find a family in each other while fighting back against an unfair adult world is profoundly moving. Persona 5 taught me that standing up for what is right, even when the whole world tells you to conform, is the ultimate form of rebellion. It is a masterpiece that stays with you long after the credits roll."})).toBe(false);
    });
})
