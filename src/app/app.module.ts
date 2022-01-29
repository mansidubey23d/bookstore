import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BookListComponent } from './admin/components/book-list/book-list.component';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookCardComponent } from './book/components/book-card/book-card.component';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'bookcard', component: BookCardComponent},
  {path: 'booklist', component: BookListComponent}
] 
@NgModule({
  // Components in this module.
  declarations: [
    AppComponent
  ],
  // Imports modules it depends on
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(routes),
    HomeModule,
    SharedModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
