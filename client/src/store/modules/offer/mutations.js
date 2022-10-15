export const SET_OFFERS = async (state, offers) => {
  state.offers = offers;
};

export const SET_ORIGIN_WAYPOINT = async (state, waypoint) => {
  state.originWaypoint = waypoint;
};

export const SET_DESTINATION_WAYPOINT = async (state, waypoint) => {
  state.destinationWaypoint = waypoint;
};

export const SET_ORIGIN_FILTER = async (state, waypoint) => {
  state.originFilter = waypoint;
};
export const SET_DESTINATION_FILTER = async (state, waypoint) => {
  state.destinationFilter = waypoint;
};

export const SET_FILTERED_OFFERS = async (state, offers) => {
  state.filteredOffers = offers;
};

export const SET_ERROR_MESSAGE = async (state, msg) => {
  state.errorMessage = msg;
};
