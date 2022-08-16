import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ChildrenModule } from "./children.module";
import { RepositoryModule } from "./repository.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    RepositoryModule,
    ChildrenModule
  ],
})

export class AppModule {}
