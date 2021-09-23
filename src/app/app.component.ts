import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular101';
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.showSuccess();
  }




  showSuccess() {
    this.toastr.success('Udemy Angular 12 projesine hoşgeldiniz.', 'Giriş Başarılı!');
  }
}