import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/helper/sidebar.service';

import { FooterNavigationService } from '../../helper/footer-navigation.service';

@Component({
  selector: 'so-footer',
  templateUrl: './so-footer.component.html',
  styleUrls: ['./so-footer.component.css']
})
export class SoFooterComponent implements OnInit {
  
  public nxtBtn: boolean = true;
  public prevBtn: boolean;
  public nxtBtnLabel: string;
  public prevBtnLabel: string;
  public isSideMenuVisible: boolean;

  constructor(private fns: FooterNavigationService, private ss: SidebarService) {
    fns.getNextBtnVisibleStatus.subscribe((event) => {
      this.nxtBtn = event;
    })
    fns.getPrevBtnVisibleStatus.subscribe((event) => {
      this.prevBtn = event;
    })
    fns.getNextBtnLabel.subscribe((event) => {
      this.nxtBtnLabel = event;
    })
    fns.getPrevBtnLabel.subscribe((event) => {
      this.prevBtnLabel = event;
    })

    ss.getStatus.subscribe(event => {
      this.isSideMenuVisible = event
    });
  }

  ngOnInit(): void {
  }

  prev() {
    this.fns.setPrevBtnStatus = true;
  }
  next() {
    this.fns.setNextBtnStatus = true;
  }
}
