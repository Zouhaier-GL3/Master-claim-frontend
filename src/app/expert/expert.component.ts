import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder) { }
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      options: ['', Validators.required],
     
    });
    this.secondFormGroup = this._formBuilder.group({
      heure: ['', Validators.required],
      img: ['', Validators.required],
    });
  }
  

}
