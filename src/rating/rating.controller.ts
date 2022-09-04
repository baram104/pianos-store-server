import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { RateProductDto } from './rate-product-dto';

@Controller('rating')
export class RatingController {
  @Post()
  createProductRating(@Body(new ValidationPipe()) ratingData: RateProductDto) {
    //auth
    //validate data :MW check if rate <=5
    //add product rating data
  }
}
