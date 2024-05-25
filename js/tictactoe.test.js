/**
 * @jest-environment jsdom
 */

const { generatePlayer} = require("./tictactoe");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("generatePlayer object contains all the optional chararcter choices", () => {
    test("character image to show", () => {
        expect("image" in generatePlayer).toBe(true);
    });
    
});