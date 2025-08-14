import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig)
    // .then(() => {
    //     // const MyComponent = createCustomElement(AppComponent, { injector: app.injector });
    //     // customElements.define('my-tag', MyComponent);
    // })
    .catch((err) => console.error(err));