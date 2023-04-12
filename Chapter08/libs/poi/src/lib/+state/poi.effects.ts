import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as PoiActions from './poi.actions';
import * as PoiFeature from './poi.reducer';
import { PoiService } from '../poi.service';

@Injectable()
export class PoiEffects {
  private actions$ = inject(Actions);
  private poiService = inject(PoiService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      switchMap(() => this.poiService.getAll()),
      switchMap(pois => of(PoiActions.loadPoiSuccess({ poi: pois }))),
      catchError((error) => {
        console.error('Error', error);
        return of(PoiActions.loadPoiFailure({ error }));
      })
    )
  );

  visit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.visitPoi),
      switchMap(action => {
        const stat = localStorage.getItem('tour-' + action.poiId);
        const total = stat ? Number(stat) + 1 : 1;
        localStorage.setItem('tour-' + action.poiId, total.toString());
        return of(PoiActions.visitPoiSuccess())
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(PoiActions.visitPoiFailure({ error }));
      })
    )
  );

}
