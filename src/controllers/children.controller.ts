import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateChildrenDTO } from "../dtos/children/createChildren.dto";
import { UpdateChildrenDTO } from "../dtos/children/updateChildren.dto";
import { Children } from "../entities/children.entity";
import { ChildrenService } from "../services/children.service";
import { Page, PageResponse } from "../utils/page.model";

@Controller("/api/childrens")
export class ChildrenController {
  constructor(
    private readonly childrenService: ChildrenService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: CreateChildrenDTO): Promise<Children> {
    return await this.childrenService.create(payload);
  }

  @Delete("/:id")
  @HttpCode(HttpStatus.OK)
  async delete(@Param("id") id: string): Promise<Children> {
    return await this.childrenService.delete(id);
  }

  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  async getById(@Param("id") id: string): Promise<Children> {
    return await this.childrenService.listOneById(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(@Param() page: Page): Promise<PageResponse<Children>> {
    return await this.childrenService.listAll(page);
  }

  @Put("/:id")
  @HttpCode(HttpStatus.OK)
  async update(@Param("id") id: string, @Body() payload: UpdateChildrenDTO): Promise<Children> {
    return await this.childrenService.update(id, payload);
  }
}
