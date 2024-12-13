import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ExpensesOverviewPageComponent } from './pages/expenses-overview-page/expenses-overview-page.component';
import { ExpensesApprovalPageComponent } from './pages/expenses-approval-page/expenses-approval-page.component';
import { NavbarComponent } from '@bt-libs/shared/ui/common-components';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesOverviewPageComponent,
    ExpensesApprovalPageComponent,
  ],
  imports: [
    BrowserModule,
    NavbarComponent,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
