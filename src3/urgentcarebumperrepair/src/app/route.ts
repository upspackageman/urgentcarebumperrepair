import { BumperreplacementComponent } from './bumperreplacement/bumperreplacement.component';
import { BumperrepairComponent } from './bumperrepair/bumperrepair.component';
import { ProcessComponent } from './process/process.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';


export const Route: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'estimate', component: EstimateComponent},
  {path: 'insurance', component: InsuranceComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'bumperrepair', component: BumperrepairComponent},
  {path: 'bumperreplacement', component: BumperreplacementComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
