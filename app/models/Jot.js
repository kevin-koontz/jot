import { generateId } from "../utils/GenerateId.js"

export class Jot {

  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body || ''
    this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    this.updatedAt = data.updatedAt
    this.color = data.color
    // this.length = Jot.length
  }

  //id='jotsNumber'
  // get countHTMLTemplate() {
  //   return `
  // <div class="d-flex justify-content-end text-white"> # Jots</div>
  // `
  // }


  //id='jotList'
  get cardHTMLTemplate() {
    return `
    <div 
   onclick="app.JotsController.setActiveJot('${this.id}')" class="p-1 my-3 jot-border text-white selectable" style="border-color: ${this.color};">
      <div class="d-flex justify-content-between">
        <p>${this.title}</p>
        <p>${this.createdDate}</p>
      </div>
      <div class="text-secondary px-2">
        <p>${this.body}</p>
      </div>
    </div>
  `
  }

  //id='activeJot'
  get contentHTMLTemplate() {
    return `<div class="text-white bg-card rounded p-4 my-1">
              <div>
                <div>
                  <div class="rectangle" style="border-color: ${this.color}; background-color: ${this.color};"></div>
                </div>
              </div>
              <div>
                <h1>${this.title}</h1>
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-secondary">
                    <div>Created on: ${this.createdDate}</div>
                    <div>Last updated: Friday 08/30/2024 3:00pm</div>
                  </div>
                  <div>
                    <button onclick="app.JotsController.deleteJot('${this.id}')" class="btn btn-outline-danger btn-width">Delete</button>
                    <button class="btn btn-primary btn-width btn-bg-primary">Save</button>
                  </div>
                </div>
              </div>
              <div>
                <textarea onblur="app.JotsController.updateJots()" class="w-100" name="body input area" id="">${this.body}</textarea>
              </div>
              <div class="d-flex justify-content-end">100 words</div>
    `
  }

  get createdDate() {
    return this.createdAt.toLocaleDateString()
  }

}