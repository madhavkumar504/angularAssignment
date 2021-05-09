import { Component } from '@angular/core';
import { PostServiceService } from './post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'assignment';
  data: any = [];
  cardData:any = {};

  constructor(private user: PostServiceService){
    this.user.getData().subscribe(data=>{
      console.warn(data);
      this.data = data;
    })
  }


  viewImage(item:any){
this.cardData = item;
console.log(this.cardData)

  }
}
