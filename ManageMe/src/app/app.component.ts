import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ManageMe';

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  
}
