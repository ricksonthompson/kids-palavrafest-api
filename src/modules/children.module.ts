import { Module } from "@nestjs/common";
import { ChildrenController } from "../controllers/children.controller";
import { ChildrenRepository } from "../repositories/children/children.repository";
import { ChildrenService } from "../services/children.service";

@Module({
  controllers: [ChildrenController],
  providers: [
    ChildrenService,
    {
      provide: "IChildrenRepository",
      useClass: ChildrenRepository
    }
  ],
  exports: [ChildrenService]
})

export class ChildrenModule {}
