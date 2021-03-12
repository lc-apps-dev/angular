import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";


export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean
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
        ).pipe(catchError(this.handleError));
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7s-rwEILCOFTqSRIAOC9ZVzaQFj0w8aA',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured';

        if(!errorRes.error || !errorRes.error.error) {
            
        }
        else {
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email exists already!';
                    break;
                case 'EMAIL_NOT_FOUND': 
                    errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.'
                    break;
                case 'INVALID_PASSWORD': 
                    errorMessage = 'The password is invalid or the user does not have a password.'
                    break;
                case 'USER_DISABLED': 
                    errorMessage = 'The user account has been disabled by an administrator.'
                    break;
            }
        }

        return throwError(errorMessage);
    }
}