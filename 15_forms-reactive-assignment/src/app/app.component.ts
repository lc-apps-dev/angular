import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appForm: FormGroup;

  projectStatuses = ['Stable', 'Critical', 'Finished'];

  forbiddenProjectNames = ['Test'];
  forbiddenProjectNamesA = ['TestAsync'];

  ngOnInit(): void {
    this.appForm = new FormGroup({

      'projectName': new FormControl(null, 
        [Validators.required, this.forbiddenProjectNamesSync.bind(this)],
        [this.forbiddenProjectNamesAsync.bind(this)]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null, [Validators.required])
    });
  }


  onSubmit() {
    console.log(this.appForm);
    console.log(this.appForm.value);
  }

  forbiddenProjectNamesSync(control: FormControl) : {[s: string]: boolean} {
    if(this.forbiddenProjectNames.indexOf(control.value)!==-1) {
      return {'projectNameIsForbiddenSync' : true};
    }
    return null;
  }

  forbiddenProjectNamesAsync(control: FormControl) : Promise<any> | Observable <any> {

    const promise = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {

        console.log('checking');

        if(this.forbiddenProjectNamesA.indexOf(control.value)!==-1) {  
          resolve({'projectNameIsForbiddenAsync' : true});
        }
        else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

}
