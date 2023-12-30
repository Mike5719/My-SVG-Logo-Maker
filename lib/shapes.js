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
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" /><text x="150" y="150" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text></svg>`;
    }

}

class Circle extends Shape {
    constructor(shapeColour, textColour, text) {
        super(shapeColour, textColour, text);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColour}" /><text x="150" y="120" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text></svg>`;
    }
}

class Square extends Shape {
    constructor(shapeColour, textColour, text) {
        super(shapeColour, textColour, text);
    }    
    render() {
        return `<rect x="50" y="25" width="150" height="150" fill="${this.shapeColour}" /><text x="125" y="125" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text></svg>`;    
    }
}

module.exports = { Triangle, Circle, Square };