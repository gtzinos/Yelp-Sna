import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NeighborhoodComponent } from './neighborhood.component';
import { MatToolbarModule, MatSortModule, MatInputModule, MatPaginatorModule, MatTableModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatCardModule, FormsModule, MatButtonModule,
    RouterModule.forChild([{ path: '', component: NeighborhoodComponent },]),
    MatIconModule, MatToolbarModule, MatSortModule, MatInputModule, MatTooltipModule,
    MatPaginatorModule, MatTableModule, FormsModule, MatButtonModule,
  ],
  declarations: [NeighborhoodComponent]
})
export class NeighborhoodModule { }
