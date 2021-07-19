import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() content!:string;
  @Input() contentCounter = {
    value : 0
  };
  public oldContent !: string;
  constructor() { }

  ngOnInit() {
    this.oldContent = this.content;
  }

}
