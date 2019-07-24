import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatFormFieldModule, MatCardModule, MatInputModule,
  MatRadioModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatMenuModule,
  MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CompetidorManagerComponent } from './competidor-manager/competidor-manager.component';
import { CompetidorListComponent } from './competidor-list/competidor-list.component';
import { CompetidorEditComponent } from './competidor-edit/competidor-edit.component';
import { CompetidorEditModalComponent } from './competidor-edit-modal/competidor-edit-modal.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CompetidorManagerComponent,
    CompetidorListComponent,
    CompetidorEditComponent,
    CompetidorEditModalComponent,
    FilterBoxComponent
  ],
  entryComponents: [
    CompetidorEditModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatFormFieldModule, MatCardModule, MatInputModule,
    MatRadioModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatMenuModule,
    MatTabsModule, MatDatepickerModule, MatNativeDateModule, BrowserAnimationsModule, ReactiveFormsModule, LayoutModule, MatGridListModule, MatToolbarModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'competidores', component: CompetidorManagerComponent },
      { path: 'competidores/:id', component: CompetidorEditComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
