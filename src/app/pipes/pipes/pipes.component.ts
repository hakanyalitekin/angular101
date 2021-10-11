import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title = "aNKara tÜrkiyenin baŞkenTidir!"
  turkishUpperCase = "";
  cashValue = 14343.344;
  today: any;
  objectVal: Object = {
    foo: "bar",
    baz: "qux",
    nested: { xyz: 3, numars: [1, 2, 3, 4] }
  };
  percentVal = 322.31;
  cityName = "İstanbul";

  customPipeCash = 133.23;

  cities:string[] = [
    "istanbul",
    "izmir",
    "ankara",
    "edirne",
    "mersin",
    "antalya",
    "samsun"
  ];


  constructor() { }

  ngOnInit(): void {
    this.turkishUpperCase = this.title.toLocaleUpperCase("tr-TR")

    this.today = new Date().toDateString();
  }

}
