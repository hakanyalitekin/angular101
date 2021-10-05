import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {

  name:any ="";
  localStorageValue:any ="";

  objUser={
    name:"",
    surName :""
  }
  constructor() { }

  ngOnInit(): void {
  }

  //#region 
  setItem(value:any){
    localStorage.setItem("name",value);
  }
  getItem(){
   this.localStorageValue = localStorage.getItem("name")
   alert(this.localStorageValue)
  }
  clearItem(){
    localStorage.removeItem("name");
  }
  clearAll(){
    localStorage.clear();
  }
//#endregion


    setObject(){
      this.objUser.name = this.objUser.name
      this.objUser.surName = this.objUser.surName
      localStorage.setItem("object", JSON.stringify(this.objUser));

    }
    getObject(){
      alert(localStorage.getItem("object"));
    }

    clearObject(){
      localStorage.removeItem("object");
    }
}
