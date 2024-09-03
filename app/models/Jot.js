import { generateId } from "../utils/GenerateId.js"

export class Jot {

  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body
    this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    this.updatedAt = data.updatedAt
    this.color = data.color

  }

  //id='jotList'
  get cardHTMLTemplate() {
    return `
    <div 
   onclick="app.JotsController.setActiveJot('${this.id}')" class="p-1 my-3 border border-light text-white rounded selectable">
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

  get contentHTMLTemplate() {
    return `<div class="text-white bg-card rounded p-4 my-1">
              <div>
                <div>
                  <div>COLOR ELEMENT</div>
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
                    <button onclick="app.JotsController.deleteJot('${this.id}')" class="btn btn-outline-danger">Delete</button>
                    <button class="btn btn-bg-primary">Save</button>
                  </div>
                </div>
              </div>
              <div>
                <textarea class="w-100" name="body input area" id="">${this.body}</textarea>
              </div>
              <div class="d-flex justify-content-end">100 words</div>
    `
  }

  get createdDate() {
    return this.createdAt.toLocaleDateString()
  }

}