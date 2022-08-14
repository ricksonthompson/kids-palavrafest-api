import { Controller, Headers, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ChildrenService } from "src/services/children.service";

@Controller("/api/childrens")
export class ChildrenController {
  constructor(
    private readonly childrenService: ChildrenService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(){}
}
