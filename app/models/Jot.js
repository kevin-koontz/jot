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

  //id='jotList'
  get cardHTMLTemplate() {
    return `
    <div class="p-1 my-3 border border-light text-white rounded selectable">
      <div class="d-flex justify-content-between">
        <p>${this.title}</p>
        <p>08/30/24</p>
      </div>
      <div class="text-secondary px-2">
        <p>${this.body}</p>
      </div>
    </div>
  `
  }

  // //id='jotsContent'
  // get contentHTMLTemplate() {
  //   return `
  // <div class="p-2 my-1 border border-dark rounded bg-card card-bg-style text-white d-flex justify-content-center align-items-center">
  //   <div>
  //     <p>PLACE HOLDER</p>
  //   </div>
  // </div>
  // `
  // }
}