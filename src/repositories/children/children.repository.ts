import { Injectable } from "@nestjs/common";
import { Children } from "src/entities/children.entity";
import { Page, PageResponse } from "src/utils/page.model";
import { Pageable } from "../../configs/database/pageable.service";
import { PrismaService } from "../../configs/database/prisma.service";
import IChildrenRepository from "./children.repository.contract";

@Injectable()
export class ChildrenRepository extends Pageable<Children> implements IChildrenRepository {
  constructor(
    private readonly repository: PrismaService
  ) {
    super()
  }

  async create(data: Children): Promise<Children> {
    const { birhdate, father, id, mother, name, responsible } = data;

    return await this.repository.children.create({
      data: { id, birhdate, father, mother, name, responsible }
    })
  }

  async findAll(page: Page): Promise<PageResponse<Children>> {
    const items = await this.repository.children.findMany({
      ...this.buildPage(page),
    })

    const total = await this.repository.children.count();

    return this.buildPageResponse(items, total);
  }

  async delete(id: string): Promise<Children> {
    return this.repository.children.delete({ where: { id }});
  }

  findById(id: string): Promise<Children> {
    return this.repository.children.findUnique({ where: { id }});
  }

  update(data: Children): Promise<Children> {
    return this.repository.children.update({
      where: { 
        id: data.id
      },
      data: {
        ...data,
        updatedAt: new Date()
      }
    })
  }
}
