import { v4 as uuid } from 'uuid'

export class Children {
  id: string
  createdAt: Date
  updatedAt?: Date

  constructor(
    props: Omit<Children, "id" | "createdAt">,
    id?: string
  ) {
    Object.assign(this, props)
    this.id = id ?? uuid()
  }
}
