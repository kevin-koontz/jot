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
}