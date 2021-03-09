import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    constructor(private authService: AuthService) {}

    isLoginMode = true;

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(authForm: NgForm) {

        if(!authForm.valid) {
            return;
        }

        if(this.isLoginMode) {

        }
        else {
            const email = authForm.value.email;
            const password = authForm.value.email;
            
            this.authService.signup(email, password).subscribe(data => {
                console.log(data);
                
            }, 
            error => {
                console.error(error);
            });
        }
        
        authForm.reset();
    }

}