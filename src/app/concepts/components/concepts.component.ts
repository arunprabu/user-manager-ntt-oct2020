import { Component, OnInit } from '@angular/core';

// Decorator
@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .redText{
      color: red;
    }
    .greenText{
      color: green;
    }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  // String interpolation related
  appName = 'User Management App!';
  developersAvgExp = 5;

  // property binding related
  companyName = 'NTT';
  isLoggedIn = false;

  // two way binding related
  courseName = 'Angular';

  // custom event related
  dataReceivedFromChildComp;

  // directives related
  skillList: string[] = ['html', 'css', 'js', 'ts', 'ng'];

  constructor() {
  }

  ngOnInit(): void {
  }

  // event binding related
  clickMeHandler(evt){
    console.log(evt); // event object
    alert('clicked -- check console');
    // todo: disable the button onclick
    // todo: change the button label from 'click me' to 'clicked'
  }

  profileLoadedHandler(evt){ // Step 4 in CEB: get the data from child comp in evt
    console.log('Data received in Child Comp: ' + evt );
    this.dataReceivedFromChildComp = evt;
  }


}
