import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


export class JotsController {
  constructor() {
    console.log('Jots controller is working!');

    this.drawJots()
    // this.drawPlaceholder()
  }


  drawJots() {
    const jots = AppState.jots
    console.log('drawing jots!');
    let JotsHTML = ''
    jots.forEach(jot => JotsHTML += jot.cardHTMLTemplate)
    setHTML('jotsList', JotsHTML)
  }

  // drawPlaceholder() {
  //   const placeholder = AppState.jotsPlaceholder
  //   console.log('drawing placeholder!', placeholder);
  //   setHTML('jotsContent', placeholder.contentHTMLTemplate)
  // }
}