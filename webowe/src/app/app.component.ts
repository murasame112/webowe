import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  private small_title1 = "Total Revenue";
  private small_title2 = "Revenue";
  private color1 = "#43e86f";
  private color2 = "#7e5ae0";
  private small_value1 = "50,000";
  private small_value2 = "1,250";
  private small_imgUrl1 = "https://icon-library.com/images/small-icon/small-icon-25.jpg";
  private small_imgUrl2 = "https://icon-library.com/images/small-icon/small-icon-25.jpg";
  private small_obj1 = {title: this.small_title1, color: this.color1, value: this.small_value1, iconUrl: this.small_imgUrl1};
  private small_obj2 = {title: this.small_title2, color: this.color2, value: this.small_value2, iconUrl: this.small_imgUrl2};
  protected smallCards = [this.small_obj1, this.small_obj2];

  private medium_title1 = "Total Earnings";
  private medium_title2 = "Products Sold";
  private precentType1 = false;
  private precentType2 = true;
  private medium_value1 = "$39K";
  private medium_value2 = "2453";
  private medium_imgUrl1 = "https://www.naukowiec.org/uploads/images/liniowy1.jpg";
  private medium_imgUrl2 = "https://www.naukowiec.org/uploads/images/liniowy1.jpg";
  private medium_obj1 = {title: this.medium_title1, precentType: this.precentType1, value: this.medium_value1, imageUrl: this.medium_imgUrl1};
  private medium_obj2 = {title: this.medium_title2, precentType: this.precentType2, value: this.medium_value2, imageUrl: this.medium_imgUrl2};
  protected mediumCards = [this.medium_obj1, this.medium_obj2];
}
