import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

  }

  @Output() onClickedBtn = new EventEmitter<boolean>();


  showForm() {
    this.onClickedBtn.emit(true);
  }
}
