import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { UploadComponent } from './modules/upload/upload/upload.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  {path:"Home", component:HomeComponent},
  {path:"Upload", component:UploadComponent},
  {path: '404', component: HomeComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
