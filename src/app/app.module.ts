import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SkiPackageComponent } from './ski-package/ski-package.component';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { SkiPackageService } from './ski-package/ski-package.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SkiPackageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
          path : 'skipackages/:username',
          component : SkiPackageComponent
        },      
        {
          path : 'skipackages',
          component : SkiPackageComponent
        }
    ]),
    NgxPaginationModule,
    FormsModule
  ],
  providers: [SkiPackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
