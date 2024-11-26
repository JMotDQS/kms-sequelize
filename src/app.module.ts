import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      autoLoadModels: true,
      synchronize: true,
      sync: {
        alter: true
      },
      dialect: 'mysql',
      host: 'localhost',
			port: 3369,
			username: 'root',
			password: 'L0rdOfL1ghtn!ng',
			database: 'kms_v2_mysql',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}