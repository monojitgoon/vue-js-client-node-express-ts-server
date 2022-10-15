import flushPromises from 'flush-promises';
import { createLocalVue } from '@vue/test-utils';
import cloneDeep from 'lodash.clonedeep';
import Vuex from 'vuex';
import axios from 'axios';
import offerModule from '@/store/modules/offer';

jest.mock('axios');

describe('testing vuex store', () => {
  // Mutations and actions are the inputs for a store
  // The output of a store is the store state or result of getters
  let offerStore;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    offerStore = cloneDeep(offerModule);
  });

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
  const sampleWaypoint = ['CCC', 'DDD'];
  const sampleFilter = 'CCC';
  const sampleMsg = 'sampleMsg';
  it('testing getters', async () => {
    expect.assertions(7);

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
    const sampleWaypoint = ['CCC', 'DDD'];
    const sampleFilter = 'CCC';
    const sampleMsg = 'sampleMsg';

    axios.post.mockImplementation(() => Promise.resolve());
    offerStore.state.offers = sampleOffer;
    offerStore.state.originWaypoint = sampleWaypoint;
    offerStore.state.destinationWaypoint = sampleWaypoint;
    offerStore.state.originFilter = sampleFilter;
    offerStore.state.destinationFilter = sampleFilter;
    offerStore.state.filteredOffers = sampleOffer;
    offerStore.state.errorMessage = sampleMsg;

    let store = new Vuex.Store({ modules: { offer: offerStore } });
    expect(store.getters['offer/getOffers']).toBe(sampleOffer);
    expect(store.getters['offer/getOriginWaypoints']).toBe(sampleWaypoint);
    expect(store.getters['offer/getDestinationWaypoints']).toBe(sampleWaypoint);
    expect(store.getters['offer/getOriginFilter']).toBe(sampleFilter);
    expect(store.getters['offer/getDestinationFilter']).toBe(sampleFilter);
    expect(store.getters['offer/getFilteredOffers']).toBe(sampleOffer);
    expect(store.getters['offer/getErrorMessage']).toBe(sampleMsg);
    await flushPromises();
  });

  it('testing mutations', () => {
    let state = {
      offers: sampleOffer,
      originWaypoint: sampleWaypoint,
      destinationWaypoint: sampleWaypoint,
      originFilter: sampleFilter,
      destinationFilter: sampleFilter,
      filteredOffers: sampleOffer,
      errorMessage: sampleMsg,
    };
    offerModule.mutations.SET_OFFERS(state, sampleOffer);
    offerModule.mutations.SET_ORIGIN_WAYPOINT(state, sampleWaypoint);
    offerModule.mutations.SET_DESTINATION_WAYPOINT(state, sampleWaypoint);
    offerModule.mutations.SET_ORIGIN_FILTER(state, sampleFilter);
    offerModule.mutations.SET_DESTINATION_FILTER(state, sampleFilter);
    offerModule.mutations.SET_FILTERED_OFFERS(state, sampleOffer);
    offerModule.mutations.SET_ERROR_MESSAGE(state, sampleMsg);

    expect(state.offers).toEqual(sampleOffer);
    expect(state.originWaypoint).toEqual(sampleWaypoint);
    expect(state.destinationWaypoint).toEqual(sampleWaypoint);
    expect(state.originFilter).toEqual(sampleFilter);
    expect(state.destinationFilter).toEqual(sampleFilter);
    expect(state.filteredOffers).toEqual(sampleOffer);
    expect(state.errorMessage).toEqual(sampleMsg);
  });

  it('test action', async () => {
    expect.assertions(1);
    const offer = sampleOffer;
    const payload = { data: offer };
    axios.get = jest.fn().mockResolvedValue(payload);
    await expect(offerModule.actions.loadOffers()).rejects.toThrow();
  });
});
