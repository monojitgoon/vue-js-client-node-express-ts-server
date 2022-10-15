import { getFormattedDate } from '../helpers/offer.helper';

export default class PriceOffer {
  constructor({
    departureDate,
    destination,
    offerType,
    origin,
    price,
    returnDate,
    seatAvailability,
    uuid,
  }) {
    this.departureDate = getFormattedDate(departureDate);
    this.destination = destination;
    this.offerType = offerType;
    this.origin = origin;
    this.priceAmount = price ? price[0].amount : 0;
    this.priceCurrency = price ? price[0].currency : '';
    this.returnDate = getFormattedDate(returnDate);
    this.seatAvailability = seatAvailability;
    this.uuid = uuid;
  }
}
