import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  import { WebDeveloperAboutUsComponent } from './web-developer/web-developer-about-us/web-developer-about-us.component';
  import { WebDeveloperContactUsComponent } from './web-developer/web-developer-contact-us/web-developer-contact-us.component';
  import { WebDeveloperIndexComponent } from './web-developer/web-developer-index/web-developer-index.component';
  import { WebDeveloperPortfolioComponent } from './web-developer/web-developer-portfolio/web-developer-portfolio.component';
  import { WebDeveloperResumeComponent } from './web-developer/web-developer-resume/web-developer-resume.component';
  import { BlogComponent } from './pages/blog/blog.component';
  import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
  import { Page404Component } from './page404/page404.component';

const routes: Routes = [
          {path: '', component: WebDeveloperIndexComponent}  ,
          {path: 'index', component: WebDeveloperIndexComponent},

          {path: 'about-us', component: WebDeveloperAboutUsComponent},
          {path: 'contact-us', component: WebDeveloperContactUsComponent},
          {path: 'index', component: WebDeveloperIndexComponent},
          {path: 'portfolio', component: WebDeveloperPortfolioComponent},
          {path: 'resume', component: WebDeveloperResumeComponent},

          // {path: 'blog', component: BlogComponent},
          // {path: 'blog-single', component: BlogSingleComponent},

          {path: '**', component: Page404Component},

      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
