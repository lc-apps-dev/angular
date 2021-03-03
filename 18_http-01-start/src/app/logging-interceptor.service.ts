import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";


export class LoggingInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        console.log('Outgoing request');
        console.log(req.url);
        console.log(req.headers);
        
        
        return next.handle(req).pipe(tap( e => {
            if(e.type ===HttpEventType.Response) {
                console.log('Response arrived, body data:');
                console.log(e.body);
            }
        }));
    }


}