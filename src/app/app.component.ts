import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({

  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',


})
export class AppComponent {

  title = 'my-app';
  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder, private fb: FormBuilder) { }
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  loginForm!: FormGroup;
  hide: boolean = true;
ngOnInit(): void {
  this.formGroup = this.fb.group({
    email: ['', [Validators.required]],
    name: ['', [Validators.required]],
    lname: ['', [Validators.required]],


    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(8),

      ]),
    ],
  })
}
}








