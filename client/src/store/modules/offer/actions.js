import { axiosInstance } from '@/shared/helpers/axios';
import { getFilteredOffers } from '@/shared/helpers/offer.helper';

import PriceOffer from '@/shared/models/PriceOffer';

export async function loadOffers({ commit }) {
  let errmsg = 'Service not available';
  await axiosInstance()
    .get('promotions/offers')
    .then(response => {
      let priceOffers = Object.values(response.data).map(
        priceOffer => new PriceOffer(priceOffer)
      );
      if (response.status === 200) {
        commit('SET_OFFERS', priceOffers);

        //Set origin waypoints from loaded priceoffers
        let originWaypoints = priceOffers.map(item => {
          return item.origin;
        });
        commit('SET_ORIGIN_WAYPOINT', originWaypoints);

        //Set destination waypoints from loaded priceoffers

        let destinationWaypoints = priceOffers.map(item => {
          return item.destination;
        });
        commit('SET_DESTINATION_WAYPOINT', destinationWaypoints);

        //Set error message as null
        commit('SET_ERROR_MESSAGE', null);
      } else {
        //Set error message
        commit('SET_ERROR_MESSAGE', errmsg);
      }
    })
    .catch(e => {
      console.error(e);
      commit('SET_ERROR_MESSAGE', errmsg);
    });
}

export function setOriginFilter({ commit }, payload) {
  commit('SET_ORIGIN_FILTER', payload);
}

export function setDestinationFilter({ commit }, payload) {
  commit('SET_DESTINATION_FILTER', payload);
}

export function loadFilteredOffers({ commit, state }) {
  let priceOffers = getFilteredOffers(
    state.offers,
    state.originFilter,
    state.destinationFilter
  );
  commit('SET_FILTERED_OFFERS', priceOffers);
}
