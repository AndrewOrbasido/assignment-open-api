import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class NasaService {
    private readonly apiKey: string = 'Uek93Qg9H4Ld5wkTbhUtgE69dhWA2FINkO6i3fUL';
    private readonly baseUrl: string = 'https://api.nasa.gov/';

    constructor(private readonly httpService: HttpService) { }

    // Method for fetching Astronomy Picture of the Day
    async getAstronomyPictureOfTheDay(): Promise<any> {
        try {
            const response: AxiosResponse = await this.httpService
                .get(`${this.baseUrl}planetary/apod?api_key=${this.apiKey}`)
                .toPromise();
            return response.data;
        } catch (error) {
            throw new InternalServerErrorException('Error fetching data from NASA API');
        }
    }

    // Method for fetching Mars Rover Photos
    async getMarsRoverPhotos(rover: string, sol: number, camera?: string): Promise<any> {
        try {
            let url = `${this.baseUrl}mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${this.apiKey}`;
            if (camera) {
                url += `&camera=${camera}`;
            }

            const response: AxiosResponse = await this.httpService.get(url).toPromise();
            return response.data;
        } catch (error) {
            throw new InternalServerErrorException('Error fetching Mars Rover photos');
        }
    }
}
