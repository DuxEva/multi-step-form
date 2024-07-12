import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

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
  styleUrl: './form-personnel.component.css',
})
export class FormPersonnelComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit() {}

  formField: FormField = {
    id: '',
    label: '',
    type: '',
    name: '',
    placeholder: '',
    value: '',
  };

  form1fields: FormField[] = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      name: 'name',
      placeholder: 'e.g. Stephen King',
      value: '',
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      name: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
      value: '',
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'text',
      name: 'phone',
      placeholder: 'e.g. +1 234 567 890',
      value: '',
    },
  ];

  nextStep() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
