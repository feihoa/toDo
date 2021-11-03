import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  ngOnInit(){
   }

   /** Инициализация формы*/
   taskForm = new FormGroup({
    task: new FormControl(''),
    newCategory: new FormControl(''),
    category: new FormControl(''),
  });
  }
