import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './elements/header/header1/header1.component';
import { PageBannerComponent } from './elements/banner/page-banner/page-banner.component';
import { SocialBarComponent } from './elements/social-bar/social-bar.component';
import { MyServicesComponent } from './elements/my-services/my-services.component';
import { FunFactCounterComponent } from './elements/fun-fact-counter/fun-fact-counter.component';
import { TestimonialComponent } from './elements/testimonial/testimonial.component';
import { OurClientComponent } from './elements/our-client/our-client.component';
import { TimelineComponent } from './elements/timeline/timeline.component';
import { CircleComponent } from './elements/progress-bar/circle/circle.component';
import { LineComponent } from './elements/progress-bar/line/line.component';
import { TagsComponent } from './elements/tags/tags.component';
import { IconBoxComponent } from './elements/icon-box/icon-box.component';
import { LoadingComponent } from './elements/loading/loading.component';
import { WebDeveloperAboutUsComponent } from './web-developer/web-developer-about-us/web-developer-about-us.component';
import { WebDeveloperContactUsComponent } from './web-developer/web-developer-contact-us/web-developer-contact-us.component';
import { WebDeveloperIndexComponent } from './web-developer/web-developer-index/web-developer-index.component';
import { WebDeveloperPortfolioComponent } from './web-developer/web-developer-portfolio/web-developer-portfolio.component';
import { WebDeveloperResumeComponent } from './web-developer/web-developer-resume/web-developer-resume.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { UserCardComponent } from './elements/user-card/user-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    PageBannerComponent,
    SocialBarComponent,
    MyServicesComponent,
    FunFactCounterComponent,
    TestimonialComponent,
    OurClientComponent,
    TimelineComponent,
    CircleComponent,
    LineComponent,
    TagsComponent,
    IconBoxComponent,
    LoadingComponent,
    WebDeveloperAboutUsComponent,
    WebDeveloperContactUsComponent,
    WebDeveloperIndexComponent,
    WebDeveloperPortfolioComponent,
    WebDeveloperResumeComponent,
    BlogComponent,
    BlogSingleComponent,
    UserCardComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
