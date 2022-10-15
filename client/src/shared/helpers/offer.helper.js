import moment from 'moment';

export const getFormattedDate = datestr => {
  //Format datestring to sample date like '02 August 2021'
  return moment(datestr).format('DD MMMM YYYY');
};

export const getFilteredOffers = (offers, originFilter, destinationFilter) => {
  //Filter given offers either origin or destination waypoint wise
  return Object.values(offers).filter(
    offer =>
      offer.origin === originFilter || offer.destination === destinationFilter
  );
};
