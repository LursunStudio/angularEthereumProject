import { Routes } from '@angular/router';

// import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MycontractComponent } from './mycontract/mycontract.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'mycontract',
    component: MycontractComponent
  },
];
