import { Body, Controller, Post } from '@nestjs/common';

@Controller('rating')
export class RatingController {
  @Post()
  createProductRating(@Body() ratingData: any) {
    //auth
    //validate data :MW
    //add product rating data
  }
}
