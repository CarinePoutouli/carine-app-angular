import { HttpInterceptorFn } from '@angular/common/http';
import { StoreService } from '../JWT/store.service';
import {inject} from "@angular/core";
import {environment} from "../../../environments/environment";

const BASE_URL  = environment.APIURL;

const urlsToExclude = [
  `${BASE_URL}/login`,
  `${BASE_URL}/register`
];
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const isExcluded = urlsToExclude.some(url => req.url.startsWith(url));
  console.log(isExcluded);
  const authToken = inject(StoreService).getToken();
  if(authToken && !isExcluded){
    req = req.clone({
      setHeaders: {
        Authorization: `Token ${authToken}`
      }
    });
  }
  return next(req);
};
