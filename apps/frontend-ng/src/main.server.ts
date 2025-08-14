import { config } from './app/app.config.server';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;