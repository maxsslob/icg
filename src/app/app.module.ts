import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './404/404.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { LandingComponent } from './landing/landing.component';
import { SeoComponent } from './seo/seo.component';
import { ContextComponent } from './context/context.component';
import { InstagramComponent } from './instagram/instagram.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/landing', component: LandingComponent },
  { path: 'services/context', component: ContextComponent },
  { path: 'services/instagram', component: InstagramComponent },
  { path: 'services/seo', component: SeoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    NotFoundComponent,
    LandingComponent,
    SeoComponent,
    ContextComponent,
    InstagramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD25CgEFmom8n2naUvIimVEPuedQH8csLI'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
