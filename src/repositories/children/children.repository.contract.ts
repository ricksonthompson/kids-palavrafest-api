import { Page, PageResponse } from "../../utils/page.model";

export default interface IChildrenRepository {
  create(data: any): Promise<any>
  findAll(page: Page): Promise<PageResponse<any>>
  delete(id: string): Promise<any>
  findById(id: string): Promise<any>
  update(data: any): Promise<any>
}
