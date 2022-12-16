// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes = [
  {
    path: 'resources',
    loadComponent: () =>
      import('./app/resources/resources.component').then(
        (m) => m.ResourcesComponent
      ),
  },
  {
    path: 'next-steps',
    loadComponent: () =>
      import('./app/next-steps/next-steps.component').then(
        (m) => m.NextStepsComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
