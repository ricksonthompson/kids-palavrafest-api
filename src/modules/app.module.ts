import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RepositoryModule } from "./repository.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    RepositoryModule
  ],
})

export class AppModule {}
