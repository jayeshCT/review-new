import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Review';
  getPercentage(score:any) {
  return Math.floor(score / 5) * 100;
}

  responseData = 
  {
    "price": "₹ 1,799.00",
    "latestReviewDate": "2018-10-21T00:00:00.000Z",
    "domain": "amazon.in",
    "imageUrl": "https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg",
    "name": "Bluetooth Speakers",
    "title": "JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)",
    "sourceCategory": "Bluetooth Speakers",
    "product_id": "ABCD1234",
    "createdAt": "2018-08-31T09:36:08.448Z",
    "reviewCount": 3013,
    "topScores": [
      {
        "topic": "Sound Quality",
        "score": 4.6,
        
      },
      {
        "topic": "Bass",
        "score": 4.2
      },
      {
        "topic": "Design and Build",
        "score": 4.2
      },
      {
        "topic": "Battery Backup",
        "score": 4.2
      }
    ]
  }
}