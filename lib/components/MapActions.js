import * as types from './MapActionTypes';

export function addMarker (newMarkerData) {
  return {
    type: types.ADD_MARKER,
    ...newMarkerData
  };
}

export function removeMarker (id) {
  return {
    type: types.REMOVE_MARKER,
    id
  };
}
