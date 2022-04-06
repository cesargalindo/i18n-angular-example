import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrescripionStatusPipe } from './pipes/prescription-status/prescription-status.pipe';
import { PipeExamplesComponent } from './components/pipe-examples/pipe-examples.component';
import { DateExamplesComponent } from './components/date-examples/date-examples.component';
import { PluralsClicksComponent } from './components/plurals-clicks/plurals-clicks.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormFieldErrorComponent } from './shared/form-field-error/form-field-error.component';
import { AmendedMessagePipe } from './pipes/amended-message/amended-message.pipe';
import { FooterComponent } from './components/footer/footer/footer.component';
import { OtherComponent } from './components/other/other/other.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PrescripionStatusPipe,
        PipeExamplesComponent,
        DateExamplesComponent,
        PluralsClicksComponent,
        InputFieldComponent,
        FormFieldErrorComponent,
        AmendedMessagePipe,
        FooterComponent,
        OtherComponent,
        DashboardComponent
    ],
    providers: [
        PrescripionStatusPipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
