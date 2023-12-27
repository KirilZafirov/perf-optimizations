import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDebugTracing, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withComponentInputBinding() ,  withRouterConfig({paramsInheritanceStrategy: 'always'})) ,]
};
// withDebugTracing() 