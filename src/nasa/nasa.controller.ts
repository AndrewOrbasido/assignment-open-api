import { Controller, Get } from '@nestjs/common';
import { NasaService } from './nasa.service';

@Controller('nasa')
export class NasaController {
    constructor(private readonly nasaService: NasaService) { }

    @Get('apod')
    async getAstronomyPictureOfTheDay() {
        return this.nasaService.getAstronomyPictureOfTheDay();
    }
}
