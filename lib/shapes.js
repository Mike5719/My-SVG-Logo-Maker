//creates shape class
class Shape {
  constructor(shapeColour, textColour, text) {
    this.shapeColour = shapeColour;
    this.textColour = textColour;
    this.text = text;
  }
}

class Triangle extends Shape {
    constructor(shapeColour, textColour, text) {
        super(shapeColour, textColour, text);
    }    
    render() {
        return `<polygon points="150, 0 300,200 0,200" fill="${this.shapeColour}" /><text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColour}">${this.text}</text>`;
    }

}

class Circle extends Shape {
    constructor(shapeColour, textColour, text) {
        super(shapeColour, textColour, text);
    }
    render() {
        return `<circle cx="200" cy="150" r="100" fill="${this.shapeColour}" /><text x="100" y="100" font-size="50" text-anchor="middle" fill="${this.textColour}">${this.text}</text>`;
    }
}

class Square extends Shape {
    constructor(shapeColour, textColour, text) {
        super(shapeColour, textColour, text);
    }    
    render() {
        return `<rect x="50" y="25" width="150" height="150" fill="${this.shapeColour}" /><text x="100" y="100" font-size="35" text-anchor="middle" fill="${this.textColour}">${this.text}</text>`;    
    }
}

module.exports = { Triangle, Circle, Square };