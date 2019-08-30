import {urls} from "../common/constants";

type AppStateType = {
  beersList: [],
  loading: boolean
};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: AppStateType = {
  beersList: [],
  loading:false,
};

export const SEARCH_BEERS = 'AppState/SEARCH_BEERS';
export const SEARCH_BEERS_SUCCESS = 'AppState/SEARCH_BEERS_SUCCESS';
export const SEARCH_BEERS_FAIL = 'AppState/SEARCH_BEERS_FAIL';

export function searchBeers(name): ActionType {
  return {
    type: SEARCH_BEERS,
    payload: {
      request: {
        url: urls.SEARCH_URL,
        method: 'GET',
      }
    }
  }
}

export default function AppStateReducer(
  state: AppStateType = initialState,
  action: ActionType,
): AppStateType {
  switch (action.type) {
    case SEARCH_BEERS:
      return {...state, loading:true};
    case SEARCH_BEERS_SUCCESS:
      return {...state, beersList: action.payload.data, loading:false};
    case SEARCH_BEERS_FAIL:
      return {...state, loading:false};
    default:
      return state;
  }
}
