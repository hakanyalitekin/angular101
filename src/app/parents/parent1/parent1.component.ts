import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from 'src/libs';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {

  @ViewChild(Child1Component) child1: Child1Component | any;
  name = "";
  successStatus = 0;

  calculaterData: any;
  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    this.calculaterData = {
      name : this.name,
      status : this.successStatus
    };
  }

  resetParentForm(event:any){
    alert(event)
    this.name ="";
    this.successStatus = 0;
  }
  childTrigger(){
    this.child1.alertSth();
  }
}
