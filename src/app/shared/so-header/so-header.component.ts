import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'so-header',
  templateUrl: './so-header.component.html',
  styleUrls: ['./so-header.component.css']
})
export class SoHeaderComponent implements OnInit {
  public role: string = '';
  @Output() logOut: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.role = 'Super Admin'
  }
  userLogOut() {
    this.logOut.emit();
  }
}
