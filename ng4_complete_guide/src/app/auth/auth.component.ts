import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService, AuthResponseData } from "./auth.service";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    constructor(private authService: AuthService, private router: Router) {}

    isLoginMode = true;
    isLoading = false;
    error: string = null;

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(authForm: NgForm) {

        if(!authForm.valid) {
            return;
        }

        const email = authForm.value.email;
        const password = authForm.value.email;

        this.isLoading = true;

        let authObs: Observable<AuthResponseData>;

        if(this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {           
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(data => {
                console.log(data);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            }, 
            errorResponse => {
                console.error(errorResponse);
                this.error = errorResponse;
                this.isLoading = false;
            });
        
        
        authForm.reset();
    }

}