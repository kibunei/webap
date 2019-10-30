import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientService } from './shared/patient.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientService], // registered patient services
  bootstrap: [AppComponent]
})
export class AppModule { }
