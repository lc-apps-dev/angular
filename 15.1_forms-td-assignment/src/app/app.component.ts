import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild('f') form: NgForm;
  

  subscriptions = ['Basic', 'Advanced', 'Pro'];

  selectedSubscriptions = this.subscriptions[1];

  onSubmit() {
    console.log(this.form.value);
  }
  

}
