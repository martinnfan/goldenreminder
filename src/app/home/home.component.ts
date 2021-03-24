import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imageObject = [
    {image: "/assets/images/landscape/pic1.jpeg",
      thumbImage:"/assets/images/landscape/pic1.jpeg",
      title: "Pic1"},
    {image: "/assets/images/landscape/pic2.jpeg",
      thumbImage:"/assets/images/landscape/pic2.jpeg",
      title: "Pic2"},
    {image: "/assets/images/landscape/pic3.jpeg",
      thumbImage:"/assets/images/landscape/pic3.jpeg",
      title: "Pic3"},
    {image: "/assets/images/landscape/pic4.jpeg",
      thumbImage:"/assets/images/landscape/pic4.jpeg",
      title: "Pic4"},
    {image: "/assets/images/landscape/pic5.jpeg",
      thumbImage:"/assets/images/landscape/pic5.jpeg",
      title: "Pic5"},
  ];

  ngOnInit(): void {
  }

  @ViewChild('slideshow') slideshow: any;

  @ViewChild('videoPlayer') videoplayer: any;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
