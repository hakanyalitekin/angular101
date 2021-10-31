import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: []
})
export class Child1Component implements OnInit {

  @Input() data:any;
  @Output() resetForm : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitForm(event:any){
    this.resetForm.emit(event);
  }

  alertSth(){
    alert("Child component'i tediklediniz.")
    console.log("Child 1 component'i tediklediniz.")
    this.data = {
      name: "Trigged!!",
      status: "false"
    }
  }
}
