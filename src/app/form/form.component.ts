import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from '../data/http-service.service';
import { plainToClass } from 'class-transformer';
import { CardsInterface } from '../data/cardsInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  taskForm:FormGroup = new FormGroup({});
  categories:any = []
  isNewCategory:boolean=false;
  allCards: CardsInterface[] = [];
  cardData :any= [];
  titleSelect:string = '';
  controls = this.taskForm.controls;


   @Output() onClickedBtn = new EventEmitter<boolean>();
   @Output() onSubmitForm = new EventEmitter<boolean>();

  constructor(
    private dataApi: HttpServiceService,
    private fb: FormBuilder)

  { this.initForm();  }

  ngOnInit(){
    this.dataApi.getDataFromApi().subscribe({
      next: (data) => {
        data.forEach(item => {
          this.cardData.push(item.title)
        })
          this.categories = plainToClass(FormComponent, this.cardData);

        console.log(this.categories)
      },
        error: (err) => console.log(err),
    });
   }
   changed(value:any){
    value == 'Новая категория' ?
    this.isNewCategory = true :
    this.isNewCategory = false;
   }

   initForm(){
    this.taskForm = this.fb.group({
      text: ['',[
        Validators.required,
       ]],
      title: ['', [
        Validators.required,
       ]],
    });
   }

   hideForm() {
     this.onClickedBtn.emit(false);
   }
   formSubmitted(e:any){

    if (this.taskForm.invalid) {
      Object.keys(this.controls)
       .forEach(controlName => this.controls[controlName].markAsTouched());
       return;
      }

     console.log(this.taskForm.value);
     this.onSubmitForm.emit(this.taskForm.value);
      this.hideForm()


   }

  }
