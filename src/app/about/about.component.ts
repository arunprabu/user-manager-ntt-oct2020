import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  randomText = 'Lorem Ipsum Dolor sit, amet consectetur adipisicing elit.';

  today: Date = new Date();

  myProfile: any = {
    name: 'Arun',
    city: 'Chennai',
    exp: 14
  };

  loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis hic cum ipsam ipsa eveniet, fugit vitae? Totam, dolorem. Rerum fuga dolorum iste reiciendis exercitationem repellendus soluta explicabo eveniet quasi';

  constructor() { }

  ngOnInit(): void {
  }

}
