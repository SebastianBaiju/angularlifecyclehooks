import { ContentComponent } from './../content/content.component';
import { Component, OnInit, SimpleChanges, OnChanges, Input, SimpleChange, DoCheck, ContentChild, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild, ElementRef, ViewChildren, QueryList, OnDestroy, Output, EventEmitter ,} from '@angular/core';


@Component({
  selector: 'app-chlid',
  templateUrl: './chlid.component.html',
  styleUrls: ['./chlid.component.scss']
})
export class ChlidComponent implements OnInit , OnChanges, DoCheck , AfterContentInit, AfterContentChecked , AfterViewInit ,AfterViewChecked,OnDestroy {

  @Input() dataFromParent: any ;
  @Input() parentReference: any ;
  @Output() childDestroy = new EventEmitter;
  @ContentChild(ContentComponent) content : any;
  @ViewChild('input') input !:ElementRef;
  @ViewChildren('input2') input2 !:QueryList<any>;;
  public inputCount = 0 ;
  public parentData :any;
  public onInit!: string;
  public parentReferenceInChange:any;
  public parentReferenceInDoCheck:any;
  public contentInit={
    parent:'',
    counter: ''
  }
  public contentChecked={
    parent:'',
    counter: ''
  }
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const dataFromParent : SimpleChange = changes.dataFromParent;
    this.parentData = dataFromParent;
    console.log('ngOnChange');
  }

  ngOnInit() {
    this.onInit =  "childOnInit";
    this.parentReferenceInChange = this.parentReference.name;
     console.log('ngOnInit');
  }

  ngDoCheck(){
    this.parentReferenceInDoCheck = this.parentReference.name;
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    this.contentInit.parent = this.content.content;
    this.contentInit.counter = this.content.contentCounter.value;
    this.content.content = "value from child"
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    this.contentChecked.parent = this.content.content;
    this.contentChecked.counter = this.content.contentCounter.value;
  }

  ngAfterViewInit(): void {
    console.log(' ngAfterViewInit');
    this.input.nativeElement.focus();
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    if(this.input2){
      this.input2.last?.nativeElement.focus();
    //  console.log(this.input2.toArray());
    }
  }

  counter(){
  this.inputCount++;
  }

  count(){
      return new Array(this.inputCount);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.childDestroy.emit('childDestroyed');
  }
}
