import { Injectable } from "@nestjs/common";
import { Page, PageResponse } from "src/utils/page.model";
import { Pageable } from "../../configs/database/pageable.service";
import { PrismaService } from "../../configs/database/prisma.service";
import IChildrenRepository from "./children.repository.contract";

@Injectable()
export class ChildrenRepository extends Pageable<any> implements IChildrenRepository {
  constructor(
    private readonly repository: PrismaService
  ) {
    super()
  }
  create(data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findAll(page: Page): Promise<PageResponse<any>> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  update(data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}