import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  IsLoading =  true;

  ngOnInit(): void {
    setTimeout(() => {
      this.IsLoading = false;
    }, 3000);
  }
}
