import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () => import('@packt/admin').then(m => m.AdminModule)
  },
  {
    path: 'tour',
    loadChildren: () => import('@packt/visitor').then(m => m.VisitorModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour'
  }
];
