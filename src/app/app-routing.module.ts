import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MgsFanpageComponent } from './landing-pages/mgs-fanpage/mgs-fanpage.component';
import { SampleFormComponent } from './landing-pages/sample-form/sample-form.component';

const routes: Routes = [
  { path: 'mgsfanpage', component: MgsFanpageComponent },
  { path: 'sampleform', component: SampleFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
