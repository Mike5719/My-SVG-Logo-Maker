const { Triangle, Square, Circle } = require("./shapes");

describe("render triangle", () => {
    it("test should fail if the shape colour, text colour and text characters are not as specified", () => {
        const triangle = new Triangle("blue", "yellow", "YES");
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="150" font-size="70" text-anchor="middle" fill="yellow">YES</text></svg>`);
    });

});

describe("render square", () => {
    it("test should fail if the shape colour, text colour and text characters are not as specified", () => {
        const square = new Square("blue", "yellow", "YES");
        expect(square.render()).toEqual(`<rect x="50" y="25" width="150" height="150" fill="blue" /><text x="125" y="125" font-size="70" text-anchor="middle" fill="yellow">YES</text></svg>`);
    });

});

describe("render circle", () => {
    it("test should fail if the shape colour, text colour and text characters are not as specified", () => {
        const circle = new Circle("blue", "yellow", "YES");
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="120" font-size="70" text-anchor="middle" fill="yellow">YES</text></svg>`);
    });

});