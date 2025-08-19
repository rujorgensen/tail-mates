import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import packageJson from '../../../../package.json';

const version = packageJson.version;

@Component({
  imports: [
    RouterModule,
  ],
  selector: 'app-root',
  template: '<h1>Welcome tailmates</h1><router-outlet></router-outlet>',
})
export class AppComponent {

  constructor() {
    console.log(`Tail Mates version: ${version}`);
  }
}
