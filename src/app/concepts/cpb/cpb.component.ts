import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1 in CPB: make a variable as custom property
  @Input() age = 20; // @Input() makes age as custom property
  // learn about alias in @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
