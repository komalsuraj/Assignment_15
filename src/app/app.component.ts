import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})
export class AppComponent {
  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {
  }

  CustomerSupportForm = this.fbobj.group(
    {
      firstName :['', [Validators.required, Validators.pattern('[a-zA-Z ]*')] ],
      lastName : ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')] ],
      phone_no : ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'),  Validators.minLength(10)] ],
      email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ],
      city : ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,}$')]],
      zipCode : ['', [Validators.required, Validators.pattern('[0-9]{5}$')]],
      comment : ['', [Validators.required, Validators.pattern('[a-zA-Z]{30,}$')]],

    }
  );
}
