/**
 * @jest-environment jsdom
 */

const { greeting } = require("./greeting");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("greeting object contains correct message", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    
});