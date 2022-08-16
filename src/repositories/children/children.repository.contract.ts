import { Children } from "../../entities/children.entity";
import { Page, PageResponse } from "../../utils/page.model";

export default interface IChildrenRepository {
  create(data: Children): Promise<Children>
  findAll(page: Page): Promise<PageResponse<Children>>
  delete(id: string): Promise<Children>
  findById(id: string): Promise<Children>
  update(data: Children): Promise<Children>
}
