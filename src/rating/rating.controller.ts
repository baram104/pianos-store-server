import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { RateProductDto } from './rate-product-dto';

@Controller('rating')
@UseGuards(AuthGuard)
export class RatingController {
  @Post(':orderId')
  rateOrder(
    @Body(new ValidationPipe()) ratingData: RateProductDto[],
    @Param('orderId', ParseIntPipe) orderId: number,
  ) {
    //add product rating data
  }
}
