import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  name = "";
  title = true;
  userName = "";
  color = "";
  cities = [
    { id: 1, name :"istanbul"},
    { id: 3, name :"İzmir"},
    { id: 6, name :"Samsun"},
    { id: 9, name :"Anlatya"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = !this.title;
  }
}
