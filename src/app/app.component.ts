import { Component } from '@angular/core';
import * as $ from 'jquery';
import openseadragon from 'openseadragon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public imagePath;
  imgURL: any;
  public message: string;
  public OSD: any;

  constructor() {}

  ngOnInit() {
    // setup front side canvas
    // alert('I am working HAY!');
    this.OSD = openseadragon({
      id: 'imgcontainer',
      prefixUrl: '/assets/images/',
      preserveViewport: true,
      tileSources: {
          type: 'image',
          url: 'assets/1.png',
          buildPyramid: false
      },
      homeFillsViewer: false,
      zoomPerClick: 1,
      zoomPerScroll: 1.1,
      minZoomLevel: 0.01,
      maxZoomLevel: 3,
      showNavigator: $('#navdiv')[0] ? true : false,
      navigatorId: $('#navdiv')[0] ? 'navdiv' : null,
      homeButton: 'homebtn'
  });

  }


  preview(files) {
    if (files.length === 0)
     {
       return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.OSD.open({
        type: 'image',
        url: this.imgURL,
        buildPyramid: false
    });
    };
  }
}
