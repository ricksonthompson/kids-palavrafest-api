import { v4 as uuid } from 'uuid';

export class Children {
  id: string
  name: string
  birhdate: string
  father: string
  mother: string
  responsible: string
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
