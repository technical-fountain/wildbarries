import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductSinglePageComponent } from './pages/product-single-page/product-single-page.component';
import { CardComponent } from './pages/card/card.component';
import { FavorsComponent } from './pages/favors/favors.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { RandomCodeComponent } from './pages/random-code/random-code.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'product', component: ProductSinglePageComponent },
    { path: 'card', component: CardComponent, canActivate: [AuthGuard] },
    { path: 'favors', component: FavorsComponent },
    { path: 'user-info', component: UserInfoComponent },
    { path: 'random-code', component: RandomCodeComponent },
];
