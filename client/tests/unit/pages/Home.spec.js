import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/pages/Home';
import Vuex from 'vuex';
import offer from '@/store/modules/offer';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home', () => {
  let actions;
  let state;
  let store;
  beforeEach(() => {
    state = {};

    actions = {
      loadOffers: jest.fn(),
      loadFilteredOffers: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        offer: {
          namespaced: true,
          state,
          actions,
          getters: offer.getters,
        },
      },
    });
  });

  it('calls store action "loadOffers" when filter button is clicked', () => {
    const wrapper = shallowMount(Home, { store, localVue });
    wrapper.find('button').trigger('click');
    expect(actions.loadOffers).toHaveBeenCalled();
  });
});
