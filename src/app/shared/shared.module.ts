import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxSpinnerModule } from "ngx-spinner";
import { FileUploadModule } from 'ng2-file-upload';

import { BasicAuthHtppInterceptor } from '../helper/basic-auth-http-interceptor';

import { SpinnerService } from '../shared/spinner/spinner.service';
import { SidebarService } from '../helper/sidebar.service';

import { TanslateSharedLazyLoadedModule } from './translateSharedLazy.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material';

import { LoginHeaderComponent } from './login-header/login-header.component';
import { SoHeaderComponent } from './so-header/so-header.component';
import { SoFooterComponent } from './so-footer/so-footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SoNavigationComponent } from './so-navigation/so-navigation.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SoSidemenuComponent } from './so-sidemenu/so-sidemenu.component';
import {ImportFileComponent} from './import-file/import-file.component';
import { VenueConfigurationComponent } from '../venue-planning/venue-configuration/venue-configuration.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LoginHeaderComponent,
    SoHeaderComponent,
    SoFooterComponent,
    SoNavigationComponent,
    SpinnerComponent,
    PageTitleComponent,
    BreadcrumbComponent,
    SoSidemenuComponent,
    ImportFileComponent,
    VenueConfigurationComponent
  ],
  exports: [
    LoginHeaderComponent,
    SoHeaderComponent,
    SoFooterComponent,
    SoNavigationComponent,
    PageTitleComponent,
    SpinnerComponent,
    BreadcrumbComponent,
    SoSidemenuComponent,
    ImportFileComponent,
    NgxSpinnerModule,
    TanslateSharedLazyLoadedModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    FileUploadModule,
    VenueConfigurationComponent,
    DynamicFormModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule,
    TanslateSharedLazyLoadedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FileUploadModule,
    DynamicFormModule
  ],
  providers: [
    SpinnerService,
    SidebarService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptor, multi: true },
  ]
})
export class SharedModule { }
