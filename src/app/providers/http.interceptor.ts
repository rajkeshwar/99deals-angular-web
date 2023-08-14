import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAjaxInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let url = req.url;

    if (/^\/api/.test(req.url)) {
      url = 'http://localhost:3000' + req.url.slice(4);
    }
    return next.handle(req.clone({ url }));
  }
}
