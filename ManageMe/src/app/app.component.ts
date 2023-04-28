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
    this.saveData('p1', 'costam projekt 1');
    this.saveData('p2', '2 projekt');
    this.saveData('f1', 'to juz funk');
  }

  
}
