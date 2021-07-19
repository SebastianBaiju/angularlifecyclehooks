import { ChangeDetectorRef, Component, OnInit} from '@angular/core';

interface IReference {
  name:string;
};

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements OnInit  {

  public onInit!: string;
  public dataFromParent = 0;
  public check = true;
  public child = true;
  public contentValue :string ="fromParent"
  public References : IReference = {name:"hai angular"};
  public contentCounter = {
    value : 0
  };
  public childStatus !: string;
  constructor(private _cd : ChangeDetectorRef) { }

  ngOnInit() {
    this.onInit =  "onInit";
    this.childStatus =  "available"
  }

  counter(){
    this.dataFromParent ++;
  }
  counterContent(){
      this.contentCounter.value ++;
  }

  destroy(){
    this.child = false;
  }

  openChild(){
    this.child = true;
    this.childStatus =  "available";
  }


  childDestroy(event:string){
    this.childStatus = event;
    this._cd.detectChanges();
  }

  Reference(){

    if (this.check) {
      this.References.name = "we are changing this world";
      this.check = !this.check;
    } else {
      this.References.name = "hai angular";
      this.check = !this.check;
    }

  }
}
