import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { TestScreenComponent } from './pages/test-screen/test-screen.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'HomeScreen' },
  { path: 'HomeScreen', component: HomeScreenComponent },
  { path: 'TestScreen', component: TestScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
