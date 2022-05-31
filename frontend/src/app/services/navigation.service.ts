import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  pages:string[]=["Home","Upload"];
  currentPage=this.pages[0];
  showNav:boolean=true;
  isWiderThan1200:boolean=true;
  scrollIsHigherThan100vh:boolean=false;
  scrollHeight:number=0;
  private prevScrollHeight:number=0;
  isSafari:boolean=false;

  fileName:string="";

  constructor() {
   this.isSafari=this.getBrowserName()=='safari';//safari
 }
 
  getBrowserName():string {
   const agent = window.navigator.userAgent.toLowerCase()
   switch (true) {
     case agent.indexOf('edge') > -1:
       return 'edge';
     case agent.indexOf('opr') > -1 && !!(<any>window).opr:
       return 'opera';
     case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
       return 'chrome';
     case agent.indexOf('trident') > -1:
       return 'ie';
     case agent.indexOf('firefox') > -1:
       return 'firefox';
     case agent.indexOf('safari') > -1:
       return 'safari';
     default:
       return 'other';
   }
}

  navbarOnScrollEvent(scrlH:number):void{
    /*this.scrollHeight=scrlH;
    this.showNav=this.prevScrollHeight>=scrlH;
    
    this.scrollIsHigherThan100vh=scrlH>window.innerHeight-100;

    this.prevScrollHeight=scrlH;
    */
  } 

  onSizeChange(windowSize:number):void{
    this.isWiderThan1200=windowSize>1200;
  }

  getFileName():string{
    return this.fileName.length==0? "./assets/imgs/home/standard.jpg" :"https://www.exo-productions.ch/api/iAmSoAwesome/"+this.fileName;
  }

}
