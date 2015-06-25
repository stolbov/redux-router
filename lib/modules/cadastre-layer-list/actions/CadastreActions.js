import * as types from './CadastreActionTypes';
import fetchLayersByUrl from '../api/fetch';

export function fetchLayerList (url) {
  return dispatch => {
    dispatch({
      type: types.FETCH_LAYER_LIST,
      url
    });
    fetchLayersByUrl(url, (err, result) => {
      dispatch(receiveLayers(result));
    });
  };
}

export function receiveLayers (layers) {
  return {
    type: types.LAYERS_RECEIVED,
    layers
  };
}

export function clearLayers () {
    return {
        type: types.CLEAR_LAYERS
    }
}
