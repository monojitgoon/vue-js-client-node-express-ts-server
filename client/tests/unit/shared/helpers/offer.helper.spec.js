import {
  getFormattedDate,
  getFilteredOffers,
} from '@/shared/helpers/offer.helper';

describe('offer.helper.js', () => {
  it('getFormattedDate', () => {
    expect(getFormattedDate('2021-08-02')).toBe('02 August 2021');
  });
  it('getFilteredOffers', () => {
    const sampleOffer = [
      {
        origin: 'CBB',
        destination: 'DDD',
        departureDate: '2021-08-03',
        returnDate: '2022-08-01',
        seatAvailability: 34,
        price: [
          {
            amount: 995.72,
            currency: 'EUR',
          },
        ],
        offerType: 'BestPrice',
        uuid: 'fb286e53-1d81-4e9c-8088-bd80c90283d8',
      },
    ];
    expect(getFilteredOffers(sampleOffer, 'CBB', 'DDD')).toEqual(sampleOffer);
  });
});
