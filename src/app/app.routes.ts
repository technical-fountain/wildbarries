import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/header/rigth/login/login.component';
import { MainComponent } from './components/main/main.component';
import { LoginsendComponent } from './pages/loginsend/loginsend.component';
import { PagesSinglInfoComponent } from './pages/pages-singl-info/pages-singl-info.component';
import { BascketComponent } from './components/header/rigth/bascket/bascket.component';
import { NgModule } from '@angular/core';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component : MainComponent},
    {path: 'loginsend', component: LoginsendComponent },
    { path: 'pagesinfo/:id', component: PagesSinglInfoComponent },
    { path: 'basket', component: BascketComponent,canActivate: [authGuardGuard]},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

