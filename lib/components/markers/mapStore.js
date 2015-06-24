import { ADD_MARKER, REMOVE_MARKER } from '../MapActionTypes';

const initialState = { markers: [] };

export default function mapStore (state = initialState, action) {
  switch (action.type) {
    case ADD_MARKER:
      return {
        ...state,
        markers: [{
          id: state.markers.length ? state.markers[0].id + 1 : 0,
          x: action.x,
          y: action.y,
          color: action.color
        }].concat(state.markers)
      };

    case REMOVE_MARKER:
      return {
        ...state,
        markers: state.markers.filter(
          marker => marker.id !== action.id
        )
      };

    default:
      return state;
  }
}
