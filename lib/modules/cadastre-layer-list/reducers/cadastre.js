import { FETCH_LAYER_LIST, LAYERS_RECEIVED, CLEAR_LAYERS } from '../actions/CadastreActionTypes';

const initialState = { loading: false, layers: [] };

export default function cadastre (state = initialState, action) {
  switch (action.type) {
    case FETCH_LAYER_LIST:
      return { ...state, loading: true };

    case LAYERS_RECEIVED:
      return { loading: false, layers: action.layers };

    case CLEAR_LAYERS:
      return { ...state, layers: [] };

    default:
      return state;
  }
}
