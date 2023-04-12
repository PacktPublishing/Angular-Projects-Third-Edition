import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PoiActions from './poi.actions';
import { PoiEntity } from './poi.models';

export const POI_FEATURE_KEY = 'poi';

export interface PoiState extends EntityState<PoiEntity> {
  selectedId?: string | number; // which Poi record has been selected
  loaded: boolean; // has the Poi list been loaded
  error?: string | null; // last known error (if any)
}

export interface PoiPartialState {
  readonly [POI_FEATURE_KEY]: PoiState;
}

export const poiAdapter: EntityAdapter<PoiEntity> =
  createEntityAdapter<PoiEntity>();

export const initialPoiState: PoiState = poiAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialPoiState,
  on(PoiActions.initPoi, (state) => ({ ...state, loaded: false, error: null })),
  on(PoiActions.loadPoiSuccess, (state, { poi }) =>
    poiAdapter.setAll(poi, { ...state, loaded: true })
  ),
  on(PoiActions.loadPoiFailure, (state, { error }) => ({ ...state, error })),
  on(PoiActions.selectPoi, (state, { poiId }) => ({ ...state, selectedId: poiId }))
);

export function poiReducer(state: PoiState | undefined, action: Action) {
  return reducer(state, action);
}
