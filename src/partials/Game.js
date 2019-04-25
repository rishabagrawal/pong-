
import{SVG_NS} from "../settings";

// console.log(SVG_NS);

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    
    this.gameElement = document.getElementById(this.element);

		// Other code goes here...
  }
  

  render() {
    let svg = document.createElementNS(SVG_NS, "svg");
svg.setAttributeNS(null, "width", this.width);
svg.setAttributeNS(null, "height", this.height);
svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
this.gameElement.appendChild(svg);

this.gameElement.innerHTML = '';
		// More code goes here....
  }
  
}