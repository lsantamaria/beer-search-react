import {urls} from "../common/constants";

export type appStateType ={
  beerList: [],
  loading: boolean
};

export type actionType ={
  type: string,
  payload?: any,
};

export const initialState: appStateType = {
  beerList: [],
  loading:false,
};

export const SEARCH_BEERS = 'AppState/SEARCH_BEERS';
export const SEARCH_BEERS_SUCCESS = 'AppState/SEARCH_BEERS_SUCCESS';
export const SEARCH_BEERS_FAIL = 'AppState/SEARCH_BEERS_FAIL';

export function searchBeers(mealName): actionType {
  return {
    type: SEARCH_BEERS,
    payload: {
      request: {
        url: urls.GET_BEERS_BY_FOOD_URL + mealName,
        method: 'GET',
      }
    }
  }
}

export default function AppStateReducer(
  state: appStateType = initialState,
  action: actionType,
): appStateType {
  switch (action.type) {
    case SEARCH_BEERS:
      return {...state};
    case SEARCH_BEERS_SUCCESS:
      const beerList = action.payload.data;
      if(beerList.length === 0){
        return {...state, beerList: [], errorMessage:"No beers were found for this meal"};
      }
      else{
        return {...state, beerList: action.payload.data, errorMessage:""};
      }
    case SEARCH_BEERS_FAIL:
      return {...state, errorMessage:"Error fetching beers from API"};
    default:
      return state;
  }
}
