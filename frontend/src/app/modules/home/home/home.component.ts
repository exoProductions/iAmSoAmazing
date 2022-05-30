import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  reloadImg:boolean=false;
  timeStamp!:number;
  constructor(private navigationService:NavigationService) { 

  }

  ngOnInit(): void {
    this.navigationService.currentPage=this.navigationService.pages[0];
    setTimeout(()=>{
      this.reloadImg=true;
    },500);
    this.timeStamp = (new Date()).getTime();
  }

  getFileName():string{
    return this.navigationService.getFileName();
  }

}
