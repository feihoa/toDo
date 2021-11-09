import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../data/projects.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  taskForm: FormGroup = new FormGroup({});
  isNewCategory: boolean = false;
  controls = this.taskForm.controls;

  @Output() onClickedBtn = new EventEmitter<boolean>();

  constructor(
    public projects: ProjectsService,
    private fb: FormBuilder) { this.initForm(); }

  ngOnInit() { }

  changed(e: any) {
    !e.value ?
      this.isNewCategory = true :
      this.isNewCategory = false;

  }
  initForm() {
    this.taskForm = this.fb.group({
      text: ['', [
        Validators.required,
      ]],
      title: ['', [
        Validators.required,
      ]],
      newTitle: [''],
    });
  }
  hideForm() {
    this.onClickedBtn.emit(false);
  }
  formSubmitted() {

    if (this.taskForm.invalid) {
      Object.keys(this.controls)
        .forEach(controlName => this.controls[controlName].markAsTouched());
      return;
    }
    if (this.isNewCategory && this.taskForm.value.newTitle) {
      this.taskForm.value.title = this.taskForm.value.newTitle;
    } else if (this.isNewCategory && !this.taskForm.value.newTitle) {
      this.taskForm.value.title = "Прочее"
    }
    delete this.taskForm.value.newTitle;
    this.projects.addCard(this.taskForm.value)

    this.hideForm()
  }

}
