import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class NasaService {
    private readonly apiKey: string = 'Uek93Qg9H4Ld5wkTbhUtgE69dhWA2FINkO6i3fUL';
    private readonly baseUrl: string = 'https://api.nasa.gov/';

    constructor(private readonly httpService: HttpService) { }

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
}
