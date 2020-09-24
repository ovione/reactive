import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive.component';



@NgModule({
  declarations: [ReactiveComponent],
  exports: [ReactiveComponent],
  imports: [
    CommonModule
  ]
})
export class ReactiveModule { }
