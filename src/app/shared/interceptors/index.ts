import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

//will register all interceptors
export const HttpInterceptor = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
