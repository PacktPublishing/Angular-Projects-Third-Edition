import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POI_FEATURE_KEY, PoiState, poiAdapter } from './poi.reducer';

// Lookup the 'Poi' feature state managed by NgRx
export const selectPoiState = createFeatureSelector<PoiState>(POI_FEATURE_KEY);

const { selectAll, selectEntities } = poiAdapter.getSelectors();

export const selectPoiLoaded = createSelector(
  selectPoiState,
  (state: PoiState) => state.loaded
);

export const selectPoiError = createSelector(
  selectPoiState,
  (state: PoiState) => state.error
);

export const selectAllPoi = createSelector(selectPoiState, (state: PoiState) =>
  selectAll(state)
);

export const selectPoiEntities = createSelector(
  selectPoiState,
  (state: PoiState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectPoiState,
  (state: PoiState) => state.selectedId
);

export const selectEntity = createSelector(
  selectPoiEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
