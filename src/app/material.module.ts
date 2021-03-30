import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_FORMATS, MatOptionModule, MatCommonModule, MatNativeDateModule, MatPseudoCheckboxModule, MatRippleModule, NativeDateModule, DateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

// import { CustomDatePickerAdapter } from './adapters/custom-date-picker.adapter';

@NgModule({
    imports: [
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatCommonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatInputModule,
        MatNativeDateModule,
        MatTabsModule,
        MatPseudoCheckboxModule,
        MatRadioModule,
        MatRippleModule,
        NativeDateModule,
        MatTooltipModule,
        MatButtonModule
    ],
    exports: [
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatCommonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatInputModule,
        MatNativeDateModule,
        MatTabsModule,
        MatPseudoCheckboxModule,
        MatRadioModule,
        MatRippleModule,
        NativeDateModule,
        MatTooltipModule,
        MatButtonModule
    ],
    // providers: [
    //     {
    //         provide: DateAdapter,
    //         useClass: CustomDatePickerAdapter
    //     }
    // ]
})
export class MaterialModule {
}
