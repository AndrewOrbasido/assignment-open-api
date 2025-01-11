import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NasaService } from './nasa/nasa.service';
import { NasaController } from './nasa/nasa.controller';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule

@Module({
  imports: [HttpModule], // Add HttpModule to imports array
  controllers: [AppController, NasaController],
  providers: [AppService, NasaService],
})
export class AppModule { }
