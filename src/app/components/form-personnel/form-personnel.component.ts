import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface FormField {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
}

@Component({
  selector: 'form-personnel',
  templateUrl: './form-personnel.component.html',
  styleUrls: ['./form-personnel.component.css'],
})
export class FormPersonnelComponent implements OnInit {
  form: FormGroup;
  @Output() isValidated = new EventEmitter<boolean>();
  @Input() triggerValidation: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  ngOnChanges() {
    this.validate();
    this.triggerValidation.subscribe(() => {
      this.validate();
      this.form.markAllAsTouched();
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.validate();
    });
  }

  formFields: FormField[] = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      name: 'name',
      placeholder: 'e.g. Stephen King',
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      name: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'text',
      name: 'phone',
      placeholder: 'e.g. +1 234 567 890',
    },
  ];

  validate() {
    const isValid = this.form.valid;
    this.isValidated.emit(isValid);
  }
}
