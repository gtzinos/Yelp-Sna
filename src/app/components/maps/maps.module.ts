import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { RouterModule } from '@angular/router';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,FormsModule,MatButtonModule,MatSelectModule,MatCheckboxModule,
    RouterModule.forChild([{path: '', component: MapsComponent}]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB32E-_zcqUHqw4QZ07ZflxDVElGUZ033I'
    })
  ],
  declarations: [MapsComponent]
})
export class MapsModule { }
