import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  formData: Patient;
  readonly rootURL: "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) { }
  postPatient(formData: Patient) {
    return this.http.post(this.rootURL+ '/patient',formData);

  }
}
