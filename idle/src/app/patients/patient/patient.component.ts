import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private service: PatientService) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      Firstname : '',
      Lastname : '',
      Other : '',
      Passport : '',
      Filled : '',
      Gender : '',
      Race : '',
      Code : '',
      Mobile : '',
    };

  }
  onSubmit(form: NgForm) {
this.insertRecord (form);
  }
insertRecord(form: NgForm) {
  this.service.postPatient(form.value).subscribe(res => {
    this.resetForm(form );
  });
}
}
