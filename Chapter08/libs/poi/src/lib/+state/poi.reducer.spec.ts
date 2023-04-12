import { Action } from '@ngrx/store';

import * as PoiActions from './poi.actions';
import { PoiEntity } from './poi.models';
import { PoiState, initialPoiState, poiReducer } from './poi.reducer';

describe('Poi Reducer', () => {
  const createPoiEntity = (id: string, name = ''): PoiEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Poi actions', () => {
    it('loadPoiSuccess should return the list of known Poi', () => {
      const poi = [
        createPoiEntity('PRODUCT-AAA'),
        createPoiEntity('PRODUCT-zzz'),
      ];
      const action = PoiActions.loadPoiSuccess({ poi });

      const result: PoiState = poiReducer(initialPoiState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = poiReducer(initialPoiState, action);

      expect(result).toBe(initialPoiState);
    });
  });
});
