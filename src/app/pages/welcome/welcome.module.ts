import { NgModule, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { HttpClientModule } from '@angular/common/http';

// ng-zorro-antd Modules
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    // routing module
    WelcomeRoutingModule,
    CommonModule,
    HttpClientModule,
    // BrowserModule,
    
    // ng-zorro-antd Modules
    NzTypographyModule,
    NzGridModule,
    NzTagModule,
    NzImageModule,
    NzCardModule,
    NzIconModule,
  ],

  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})

export class WelcomeModule implements OnInit{
  ngOnInit(): void{
    let sum = (x: number, y: number): number => {
      return x + y;
    }
    console.log(sum(10,39));
  }
}
