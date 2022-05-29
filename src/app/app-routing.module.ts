import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MgsFanpageComponent } from './landing-pages/mgs-fanpage/mgs-fanpage.component';

const routes: Routes = [
  { path: 'mgsfanpage', component: MgsFanpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
