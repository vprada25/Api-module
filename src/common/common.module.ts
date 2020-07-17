import { Module, Global } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import configuration from './config/enviroments.config';
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./providers/orm.config.service";

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            envFilePath: join(process.cwd(), 'environments', 'development.env'),
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService,
        }),

    ],
    providers: [TypeOrmConfigService],
    exports: [TypeOrmConfigService]
})
export class CommonModule { }