import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', // selector
  // inline template
  template: `
    <div class='text-center'>
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class="greyText">Copyright &copy; 2020 | NTT
    </div>
  `,
  // inline styles
  styles: [
    `
      .greyText{
        color: grey;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
