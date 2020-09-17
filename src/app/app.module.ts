import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FileComponent } from './file-manager/file/file.component';

import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerTableComponent } from './file-manager/file-manager-table/file-manager-table.component';
import { ActionsComponent } from './file-manager/actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    FileManagerComponent,
    FileManagerTableComponent,
    ActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TreeModule,
    TreeTableModule,
    FileUploadModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
