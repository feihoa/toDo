import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

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

  onClickedBtn() {
    this.onClickedBtns.emit(true);
  }
  closePopup(event: Event) {
    let el = (event.target as HTMLInputElement);
    if(el.id === "popup"){
      this.onClickedBtn();
    }
  }
  checkBtn(event: Event){
    console.log(event)
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.key === "Escape" ?
    this.onClickedBtn() :
    null
  }
}
