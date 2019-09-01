import {SEARCH_BEERS, searchBeers} from "./AppState";
import {urls} from "../common/constants";

describe('app state actions', () => {
  it('should create an action to search beers', () => {
    const text = 'Fish';
    const expectedAction = {
      type: SEARCH_BEERS,
      payload: {
        request: {
          url: urls.GET_BEERS_BY_FOOD_URL + text,
          method: 'GET',
        }
      }
    };
    expect(searchBeers(text)).toEqual(expectedAction)
  })
});
