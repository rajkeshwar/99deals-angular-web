
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { HttpAjaxInterceptor } from './app/providers/http.interceptor';

const toProvider = (useClass:any) => ({ provide: HTTP_INTERCEPTORS, useClass, multi: true });

bootstrapApplication(AppComponent, {
    providers: [
      provideAnimations(),
      toProvider(HttpAjaxInterceptor),
      provideHttpClient(withInterceptorsFromDi()),
      importProvidersFrom(BrowserModule, AppRoutingModule)
    ]
})
  .catch(err => console.error(err));
