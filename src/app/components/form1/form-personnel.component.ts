import { Component } from '@angular/core';

interface FormField {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

@Component({
  selector: 'form-personnel',
  templateUrl: './form-personnel.component.html',
  styleUrl: './form-personnel.component.css',
})
export class FormPersonnelComponent {
  formField: FormField = {
    id: '',
    label: '',
    type: '',
    name: '',
    placeholder: '',
  };

  form1fields: FormField[] = [
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
      name: 'lastName',
      placeholder: 'e.g. +1 234 567 890',
    },
  ];
}
