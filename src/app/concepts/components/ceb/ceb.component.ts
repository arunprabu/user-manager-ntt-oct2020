import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  profileName = 'Arun';

  // Step 1 in CEB: Make custom event
  @Output() profileLoaded = new EventEmitter();  // @Output() makes profileLoaded as custom event

  constructor() { }

  ngOnInit(): void {
  }

  loadProfileHandler(){
    alert('loading');
    console.log('Before sending data to child comp');
    // Step 2 in CEB: Emit the event to send the data to the parent comp
    this.profileLoaded.emit(this.profileName);
  }
}
