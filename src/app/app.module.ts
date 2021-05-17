import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbAlertModule, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,  MatNativeDateModule,  MatRadioButton,  MatRadioModule,  MatStepperModule } from '@angular/material';
import { AddConstatComponent } from './add-constat/add-constat.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { AgentSaisieComponent } from './agent-saisie/agent-saisie.component';

import { PinshZoomComponent } from './pinsh-zoom/pinsh-zoom.component';
import { CommonModule } from '@angular/common';
import { ExpertComponent } from './expert/expert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { TableItemComponent } from './table-item/table-item.component';
import { SideListComponent } from './side-list/side-list.component';


import { ToastModule } from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    SettingsComponent,
    AddressComponent,
    AddConstatComponent,

    AgentSaisieComponent,
    PinshZoomComponent,
    ExpertComponent,
    DashboardComponent,
    TableComponent,
    TableItemComponent,
    SideListComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, 
    MatListModule, 
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
   
    MatDatepickerModule,
    MatNativeDateModule,
   
    // MatRadioButton,
    MatRadioModule,
    CommonModule,
    CheckboxModule,
    DialogModule,
    ToastModule,
    ButtonModule,
    AvatarModule,
    PaginatorModule,
    AvatarGroupModule,
    TableModule,
  
    
  ],
  providers: [RestApiService, DataService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
