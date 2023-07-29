import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './pages/deals/deals.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { PromoVideosComponent } from './pages/promo-videos/promo-videos.component';
import { PromoInfoComponent } from './pages/promo-info/promo-info.component';

export const routes: Routes = [
  { path: '', redirectTo: 'deals', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'promo-videos', component: PromoVideosComponent },
  { path: 'promo-info', component: PromoInfoComponent },
  { path: '**', component: DealsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
