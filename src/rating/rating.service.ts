import { Injectable, Session } from '@nestjs/common';
import { RateProductDto } from './rate-product-dto';

@Injectable()
export class RatingService {
  rateOrder(
    @Session() session: Record<string, any>,
    ratedProducts: RateProductDto,
    orderId: number,
  ) {
    //check if userId has this order in DB
    //check if rate <=5
  }
}
