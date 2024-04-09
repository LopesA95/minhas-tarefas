import * as enums from '../utils/enums/Tarefa'

export class Tarefa {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
  id: number

  constructor(
    title: string,
    priority: enums.Priority,
    status: enums.Status,
    description: string,
    id: number
  ) {
    this.title = title
    this.priority = priority
    this.status = status
    this.description = description
    this.id = id
  }
}
