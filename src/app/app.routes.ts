import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'who-we-are',
    title: 'Who we are',
    loadComponent: () =>
      import('./pages/who-we-are/who-we-are.component').then(
        (mod) => mod.WhoWeAreComponent
      ),
  },
  {
    path: 'about-us',
    title: 'About us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (mod) => mod.AboutUsComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
