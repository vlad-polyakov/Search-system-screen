import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule} from '@angular/material';
import { ScreenComponent } from '../screen-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ScreenComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    ScreenComponent
  ]
})
export class ScreenModule { }
