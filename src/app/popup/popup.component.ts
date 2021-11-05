import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() onClickedBtns = new EventEmitter<boolean>();
  @Output() onSubmitForm = new EventEmitter<boolean>();


  onClickedBtn() {
    this.onClickedBtns.emit(true);
  }
  onSubmit(data:any){
    this.onSubmitForm.emit(data);
  }

}
