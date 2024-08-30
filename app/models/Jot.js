import { generateId } from "../utils/GenerateId.js"

export class Jot {

  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.color = data.color

  }

  get cardHTMLTemplate() {
    return `
      <div class="d-flex justify-content-between">
        <p>CSS TRICKS</p>
        <p>08/30/24</p>
      </div>
      <p>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
      </p>
  `
  }


}