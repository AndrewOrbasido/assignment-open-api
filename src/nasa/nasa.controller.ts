import { Controller, Get, Query } from '@nestjs/common';
import { NasaService } from './nasa.service';

@Controller('nasa')
export class NasaController {
    constructor(private readonly nasaService: NasaService) { }

    // Endpoint for Astronomy Picture of the Day
    @Get('apod')
    async getAstronomyPictureOfTheDay() {
        return this.nasaService.getAstronomyPictureOfTheDay();
    }

    // Endpoint for Mars Rover Photos
    @Get('mars-rover-photos')
    async getMarsRoverPhotos(
        @Query('rover') rover: string,
        @Query('sol') sol: number,
        @Query('camera') camera?: string
    ) {
        return this.nasaService.getMarsRoverPhotos(rover, sol, camera);
    }

    // Endpoint for searching Astronomy Picture of the Day (APOD) by keyword or date
    @Get('search-apod')
    async searchAstronomyPictureOfTheDay(
        @Query('query') query: string,
        @Query('date') date?: string
    ) {
        return this.nasaService.searchAstronomyPictureOfTheDay(query, date);
    }
}
