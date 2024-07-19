import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {
        // login.html equivalent from SpringBootMysql web app
        path: '',
        component: LoginComponent,
    },
    {
        // userdetails.html equivalent from SpringBootMysql web app
        path: 'home',
        component: HomeComponent,
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }