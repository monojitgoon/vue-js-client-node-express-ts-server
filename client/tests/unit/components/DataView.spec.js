import { shallowMount } from '@vue/test-utils';
import DataView from '@/components/DataView';

describe('DataView', () => {
  it('renders props.offersData when passed', async () => {
    const offersData = [
      {
        origin: 'CBB',
        destination: 'DDD',
        departureDate: '2021-08-03',
        returnDate: '2022-08-01',
        seatAvailability: 34,
        priceAmount: 995.72,
        priceCurrency: 'EUR',
      },
    ];
    const wrapper = shallowMount(DataView, {
      propsData: { offersData: offersData },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
