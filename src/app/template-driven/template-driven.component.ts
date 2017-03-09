import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  user={
username:'aniket',
email:'aniket@gmail.com',
password:123,
  gender:'male'
  }
  genders=[
     'male',
    'female'
  ];
  onSubmit(form:NgForm){
    console.log(form.value);

  }
}
