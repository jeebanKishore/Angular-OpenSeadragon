import { Component } from '@angular/core';
import * as $ from 'jquery';
import openseadragon from 'openseadragon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public canvas: any;
  public props: any = {
    canvasFill: '#ffffff',
    textBackgroundfill: '#ffffff',
    textTLfill: '#000000',
    canvasImage: '',
    id: null,
    opacity: null,
    fill: null,
    fontSize: null,
    lineHeight: null,
    charSpacing: null,
    fontWeight: null,
    fontStyle: null,
    textAlign: null,
    fontFamily: null,
    TextDecoration: ''
  };

  public textString: string;
  public upperTextString: string;
  public lowerTextString: string;
  public url = '';
  public urlBg = '';
  public size: any = {
    width: 540,
    height: 500
  };


  public json: any;
  public globalEditor = false;
  public textEditor = false;
  public imageEditor = false;
  public figureEditor = false;
  public selected: any;

  constructor() {}

  ngOnInit() {
    // setup front side canvas
    alert('I am working HAY!');

    const OSD = openseadragon({
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
}
