import { createSelector } from 'reselect';

export const meditationsSelector = createSelector(
  (state) => state.meditations,
  (meditations) => meditations,
);
