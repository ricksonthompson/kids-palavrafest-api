import { HttpException, HttpStatus, Inject, Injectable, Logger, StreamableFile } from "@nestjs/common";
import { CreateChildrenDTO } from "src/dtos/children/createChildren.dto";
import { UpdateChildrenDTO } from "src/dtos/children/updateChildren.dto";
import { Children } from "src/entities/children.entity";
import IChildrenRepository from "src/repositories/children/children.repository.contract";
import { Page, PageResponse } from "src/utils/page.model";

@Injectable()
export class ChildrenService {
  constructor (
    @Inject("IChildrenRepository")
    private readonly childrenRepository: IChildrenRepository
  ) {}

  async create(props: CreateChildrenDTO): Promise<Children> {
    const children = new Children({...props});

    return await this.childrenRepository.create(children);
  }

  async delete(id: string): Promise<Children> {

    const children = await this.listOneById(id);

    return await this.childrenRepository.delete(children.id);
  }

  async listOneById(id: string): Promise<Children> {

    const children = await this.childrenRepository.findById(id);

    if (!children) throw new HttpException(
      `Não existe criança registrada com o id ${id}`, 
      HttpStatus.NOT_FOUND
    );

    return children;
  }

  async listAll(page: Page): Promise<PageResponse<Children>> {

    return await this.childrenRepository.findAll(page);
  }

  async update(id: string, props: UpdateChildrenDTO): Promise<Children> {

    const children = await this.listOneById(id);

    Object.assign(children, {...children, ...props});

    return await this.childrenRepository.update(children);
  }
}
