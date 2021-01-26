import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy,
  AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterViewInit, AfterViewChecked, OnDestroy,
  AfterContentChecked {

  @Input('srvElement')  element: {type: string, name: string, content: string};

  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  constructor() { 
    console.log('constractor called');


  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called');
    
  }

  ngOnInit(): void {
    console.log('ngOnInit called');

    console.log('textContent: ' + this.header.nativeElement.textContent);
    
  }

  ngDoCheck (){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');

    console.log('ngAfterViewInit textContent: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }


  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
