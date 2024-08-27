import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userListReducer } from './state/userList/usersList.reducer';
import { userListEffects } from './state/userList/usersList.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimationsAsync(),
  provideStore({
    usersList: userListReducer, // Register feature state
  }), provideEffects([userListEffects]),]
};
