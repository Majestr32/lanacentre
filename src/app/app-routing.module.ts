import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: '**', component: AboutComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
