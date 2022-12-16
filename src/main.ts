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
      import('src/app/resources/resources.component').then(
        (c) => c.ResourcesComponent
      ),
  },
  {
    path: 'next-steps',
    loadComponent: () =>
      import('src/app/next-steps/next-steps.component').then(
        (c) => c.NextStepsComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
