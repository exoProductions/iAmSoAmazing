import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  reloadImg: boolean = false;
  timeStamp!: number;

  imgs: string[] = [
    "img0.jpg",
    "img1.jpg",
    "img2.jpg",
  ];
  titles: string[] = [
    "Mein Idol",
    "Nicht die USA",
    "Homies & Andere"
  ];
  texts: string[] = [
    "Treffen mit Arnold Schwarzenegger",
    "Ich als erster Mensch auf dem Mond",
    "Meine besten Freunde"
  ];

  donateLink: string = "https://buy.stripe.com/dR63eC65a7Rf5u88wE";

  moreIcon=faChevronRight;

  constructor(private navigationService: NavigationService) {

  }

  ngOnInit(): void {
    this.navigationService.currentPage = this.navigationService.pages[0];
    setTimeout(() => {
      this.reloadImg = true;
    }, 500);
    this.timeStamp = (new Date()).getTime();
  }

  getFileName(): string {
    return this.navigationService.getFileName();
  }

  
  donate(): void {
    window.open(this.donateLink, "_blank");
  }

}
