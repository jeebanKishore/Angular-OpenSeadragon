import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as $ from 'jquery';
import openseadragon from 'openseadragon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  public OSD: any;
  public presets = [];
  public shapes = [];
  public unpaid = false;
  public defshapes = 12;
  public imgnum = 9;
  public hnum = 10;
  public vnum = 10;
  public rot = 0;
  public tmprot = 0;
  public rotrnd = false;
  public rotalt = false;
  public pat = 0;
  public shape = 1;
  public freq = 50;
  public amplitude = 1;
  public grad = 0;
  public grot = 0;
  public useimgcol = false;
  public col = '#FFFFFF';
  public bgcol = '#000000';
  public usebgcol = true;
  public size = 75;
  public contrast = 50;
  public hdist = 100;
  public shapeArray = [];
  public msize = 0;
  public stroke = 0;
  public hsize = 500;
  public centerx = 0;
  public centery = 0;
  public breakLoop = false;
  public lastFrame = 0;
  public elements = [];
  public monochr = false;
  public gradCounter = 0;
  public customText = '';
  public lastChar = -1;
  public vsize = 500;
  public type = 0;
  public shapesloaded = 0;
  public useimgsize = false;
  public prevcoord = [];
  public cnv: any;
  public scnv: any;
  public ctx;
  public svg: any;
  public imgcnv: any;
  public imgctx;
  public srcimg;
  constructor() {}

  ngAfterViewInit() {
    this.cnv = document.getElementById('maincanvas') as HTMLCanvasElement;
  this.scnv = document.getElementById('shapecanvas') as HTMLCanvasElement;
  this.ctx = this.cnv.getContext('2d');
  this.svg = document.getElementById('svgcanvas') as HTMLCanvasElement;
  this.imgcnv = document.getElementById('imgcanvas') as HTMLCanvasElement;
  this.imgctx = this.imgcnv.getContext('2d');
  }
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

    this.presets = [
      {
        id: '361180',
        name: 'Line Pattern',
        grad: '5',
        bgcol: '#3f536c',
        col: '#ffffff',
        vnum: '75',
        size: '90',
        rot: '0',
        grot: '60',
        shape: '4',
        pat: '0',
        freq: '22',
        created: '1462803009',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361179',
        name: 'Jade Dot Pattern',
        grad: '5',
        bgcol: '#06664f',
        col: '#20f3ad',
        vnum: '100',
        size: '120',
        rot: '0',
        grot: '45',
        shape: '1',
        pat: '0',
        freq: '22',
        created: '1462802791',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361178',
        name: 'Cross Pattern',
        grad: '6',
        bgcol: '#FFFFFF',
        col: '#1d188b',
        vnum: '75',
        size: '120',
        rot: '0',
        grot: '-60',
        shape: '8',
        pat: '2',
        freq: '22',
        created: '1462802701',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361177',
        name: 'Wave Pattern',
        grad: '5',
        bgcol: '#52104f',
        col: '#f6e8af',
        vnum: '100',
        size: '70',
        rot: '0',
        grot: '0',
        shape: '4',
        pat: '5',
        freq: '22',
        created: '1462802591',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361176',
        name: 'Circular Pattern',
        grad: '6',
        bgcol: '#aff4f6',
        col: '#7c4d38',
        vnum: '100',
        size: '100',
        rot: '0',
        grot: '0',
        shape: '1',
        pat: '6',
        freq: '50',
        created: '1462802485',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361175',
        name: 'Hex Pattern',
        grad: '5',
        bgcol: '#3d2939',
        col: '#95e88f',
        vnum: '100',
        size: '100',
        rot: '30',
        grot: '0',
        shape: '3',
        pat: '3',
        freq: '50',
        created: '1462802411',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361174',
        name: 'Triangle Pattern',
        grad: '5',
        bgcol: '#395c6b',
        col: '#d4cb92',
        vnum: '100',
        size: '100',
        rot: '0',
        grot: '0',
        shape: '9',
        pat: '3',
        freq: '50',
        created: '1462802339',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361173',
        name: 'Pointillism',
        grad: '5',
        bgcol: '#000000',
        col: '#1579fa',
        vnum: '150',
        size: '100',
        rot: '0',
        grot: '0',
        shape: '1',
        pat: '4',
        freq: '21',
        created: '1462801963',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361172',
        name: 'Fresh',
        grad: '5',
        bgcol: '#6baa75',
        col: '#e0fb62',
        vnum: '75',
        size: '125',
        rot: '180',
        grot: '30',
        shape: '2',
        pat: '3',
        freq: '21',
        created: '1462800185',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361171',
        name: 'Pop Art',
        grad: '6',
        bgcol: '#fd9c89',
        col: '#167e87',
        vnum: '100',
        size: '100',
        rot: '0',
        grot: '-30',
        shape: '1',
        pat: '5',
        freq: '21',
        created: '1462799386',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361170',
        name: 'Subtle Comic Dot',
        grad: '6',
        bgcol: '#ffffff',
        col: '#978b9e',
        vnum: '150',
        size: '95',
        rot: '45',
        grot: '45',
        shape: '1',
        pat: '0',
        freq: '50',
        created: '1462798977',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361169',
        name: 'Cross Stitch',
        grad: '0',
        bgcol: '#ffffff',
        col: 'img',
        vnum: '75',
        size: '55',
        rot: '45',
        grot: '0',
        shape: '8',
        pat: '0',
        freq: '50',
        created: '1462798832',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361168',
        name: 'Matrix',
        grad: '5',
        bgcol: '#000000',
        col: '#05ff00',
        vnum: '72',
        size: '140',
        rot: '0',
        grot: '0',
        shape: '11',
        pat: '0',
        freq: '50',
        created: '1462798724',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361167',
        name: 'Fuzz',
        grad: '5',
        bgcol: '#381705',
        col: 'img',
        vnum: '100',
        size: '105',
        rot: '-360',
        grot: '0',
        shape: '10',
        pat: '4',
        freq: '50',
        created: '1462798548',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361166',
        name: 'Triangular',
        grad: '6',
        bgcol: '#ffffff',
        col: 'img',
        vnum: '51',
        size: '100',
        rot: '-900',
        grot: '0',
        shape: '9',
        pat: '7',
        freq: '50',
        created: '1462798422',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361165',
        name: 'Hexagons',
        grad: '6',
        bgcol: '#ffffff',
        col: 'img',
        vnum: '100',
        size: '110',
        rot: '30',
        grot: '0',
        shape: '3',
        pat: '3',
        freq: '50',
        created: '1462798392',
        stroke: '2',
        hdist: '100'
      },
      {
        id: '361164',
        name: 'Mosaic',
        grad: '6',
        bgcol: '#ffffff',
        col: 'img',
        vnum: '100',
        size: '100',
        rot: '0',
        grot: '45',
        shape: '0',
        pat: '2',
        freq: '50',
        created: '1462798199',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361163',
        name: 'Default',
        grad: '6',
        bgcol: '#ffffff',
        col: 'img',
        vnum: '100',
        size: '100',
        rot: '0',
        grot: '0',
        shape: '1',
        pat: '0',
        freq: '14',
        created: '1462797864',
        stroke: '0',
        hdist: '100'
      },
      {
        id: '361162',
        name: 'Doodles',
        grad: '6',
        bgcol: '#ffffff',
        col: 'img',
        vnum: '50',
        size: '35',
        rot: '0',
        grot: '0',
        shape: '4',
        pat: '4',
        freq: '50',
        created: '0',
        stroke: '0',
        hdist: '100'
      }
    ];
  }

  openInput() {
    // your can use ElementRef for this later
    document.getElementById('fileInput').click();
  }
  preview(files: any) {
    if (files.length === 0) {
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
    reader.onload = _event => {
      this.imgURL = reader.result;
      this.srcimg = reader.result;
      this.OSD.open({
        type: 'image',
        url: this.imgURL,
        buildPyramid: false
      });
    };
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  zoomSlider($event) {
    console.log($event);
  }
}
