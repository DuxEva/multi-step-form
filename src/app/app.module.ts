import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormPersonnelComponent } from './components/form-personnel/form-personnel.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { AddOnsComponent } from './components/add-ons/add-ons.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FormPersonnelComponent,
    SelectPlanComponent,
    AddOnsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
