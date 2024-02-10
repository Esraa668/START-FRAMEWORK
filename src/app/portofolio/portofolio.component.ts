import { Component } from '@angular/core';
import { Img } from '../img';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})
export class PortofolioComponent {
  imgs: Img[] = [
    {
      Img: './assets/assets/assets/poert1.png',
    },
    {
      Img: './assets/assets/assets/port2.png',
    },
    {
      Img: './assets/assets/assets/port3.png',
    },
    {
      Img: './assets/assets/assets/poert1.png',
    },
    {
      Img: './assets/assets/assets/port2.png',
    },
    {
      Img: './assets/assets/assets/port3.png',
    },
  ];

  urlImg: string = '';
  open(url: string): void {
    this.urlImg = url;
  }
  close(e: any): void {
    if ((e.target as HTMLElement).classList.contains('model')) {
      this.urlImg = '';
    }
  }
}
