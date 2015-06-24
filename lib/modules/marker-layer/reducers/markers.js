import { ADD_MARKER, REMOVE_MARKER } from '../actions/MarkerActionTypes';

const initialState = [];

export default function markers (state = initialState, action) {
  switch (action.type) {
    case ADD_MARKER:
      return [{
        id: state.length ? state[0].id + 1 : 0,
        x: action.x,
        y: action.y,
        color: action.color
      }].concat(state);

    case REMOVE_MARKER:
      return state.filter(marker => marker.id !== action.id);

    default:
      return state;
  }
}
