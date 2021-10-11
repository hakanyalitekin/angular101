import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title = "aNKara tÜrkiyenin baŞkenTidir!"
  turkishUpperCase = "";
  today:any;
    constructor() { }

  ngOnInit(): void {
    this.turkishUpperCase = this.title.toLocaleUpperCase("tr-TR")

    this.today = new Date().toDateString();
  }

}
