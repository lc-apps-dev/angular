import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";


interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7s-rwEILCOFTqSRIAOC9ZVzaQFj0w8aA', 
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(errorResponse => {
            
            let errorMessage = 'An unknown error occured';

            if(!errorResponse.error || !errorResponse.error.error) {
                
            }
            else {
                switch(errorResponse.error.error.message){
                    case 'EMAIL_EXISTS':
                        errorMessage = 'This email exists already!';
                }
            }

            return throwError(errorMessage);
        }));
    }
}