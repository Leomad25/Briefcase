import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})

export class GraphicComponent implements AfterViewInit, OnChanges {
  @Input() name: string = '';
  @Input() size: number = 24;
  @Input() color: string = 'black';

  @ViewChild('canvas') canvasElement!: ElementRef;
  
  graphicSelected: GraphicSelectedInterface = {
    isArrow: { up: false, down: false, left: false, right: false }
  }

  ngOnChanges(): void {
    switch (this.name) {
      case GraphicList.ARROW_UP: this.graphicSelected.isArrow.up = true; break;
      case GraphicList.ARROW_DOWN: this.graphicSelected.isArrow.down = true; break;
      case GraphicList.ARROW_LEFT: this.graphicSelected.isArrow.left = true; break;
      case GraphicList.ARROW_RIGHT: this.graphicSelected.isArrow.right = true; break;
    }
  }

  ngAfterViewInit(): void {
    this.canvasElement.nativeElement.style = 'width: ' + this.size +'px; height: ' + this.size + 'px;';
    const vectorContainer: HTMLDivElement = this.canvasElement.nativeElement.getElementsByClassName('vector')[0];
    if (vectorContainer) this.paintChild(vectorContainer);
    //vectorContainer.childNodes.forEach((e:any) => { e.style.backgroundColor = this.color; });
  }

  paintChild($e: any): void {
    $e.style.backgroundColor = this.color;
    if ($e.childNodes.length > 0)
      for(let i = 0; i < $e.childNodes.length; i++)
        this.paintChild($e.childNodes[i]);
  }
}

interface GraphicSelectedInterface {
  isArrow: { up: boolean; down: boolean; left: boolean; right: boolean; }
}

export enum GraphicList {
  ARROW_UP = 'arrow_up',
  ARROW_DOWN = 'arrow_down',
  ARROW_LEFT = 'arrow_left',
  ARROW_RIGHT = 'arrow_right'
}