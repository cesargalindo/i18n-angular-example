import { Component, OnInit, LOCALE_ID } from '@angular/core';

import { PrescriptionStatus, IButtons, ButtonNames } from '../../constants/index';
import { TitleService } from '../../services/title/title/title.service';

import { PrescripionStatusPipe } from '../../pipes/prescription-status/prescription-status.pipe';

@Component({
    selector: 'app-pipe-examples',
    templateUrl: './pipe-examples.component.html',
    styleUrls: ['./pipe-examples.component.css']
})
export class PipeExamplesComponent implements OnInit {
    // For use in template
    public PrescriptionStatus = PrescriptionStatus;

    // Actual status of the order/prescription
    public prescriptionStatus1: PrescriptionStatus = PrescriptionStatus.CANCELED;
    public prescriptionStatus2: PrescriptionStatus = PrescriptionStatus.PROCESSING

    passVariable: string;

    // public submitButton = $localize`:@@submitbutton:Submit`;
    public submitButton = IButtons[ButtonNames.SUBMIT].name;
    public loginButton = IButtons[ButtonNames.LOGIN].name;
    public changeMessageButton = IButtons[ButtonNames.CHANGE_MESSAGE].name;
    public toggleStatusButton = IButtons[ButtonNames.TOGGLE_STATUS].name;

    public continueDraftReg = IButtons[ButtonNames.CONTINUE_DRAFT_REGISTRATION].name;
    public addNewReg = IButtons[ButtonNames.ADD_NEW_REGISTRATION].name;

    public test2: string;

    public testAmended1: string = 'Test Amended Pipe 1 with INterpretation';
    public testAmended2: string = 'Test Amended Pipe 1 with deMOgraphics';
    public testAmended3: string = 'Test Amended Pipe 1 with nothing';

    constructor(
        public titleService: TitleService,
        public prescripionStatusPipe: PrescripionStatusPipe
    ) { }
å
    ngOnInit(): void {
        // pass a variable using $localize
        // WARN: this.prescriptionStatus1 can not be localized with this implementation
        this.passVariable = $localize`:@@identification_trans_unit: Text text ${this.prescriptionStatus1}:INTERPOLATION: another text`;

        // GOOD:
        this.test2 = this.prescripionStatusPipe.transform(this.prescriptionStatus1);
    }

    messageYClick() {
        this.titleService.setMessageY(1);
    }

    toggleStatus() {
        if (this.prescriptionStatus1 === PrescriptionStatus.CREATED) {
            this.prescriptionStatus1 = PrescriptionStatus.COMPLETE;
        // WARN: this.prescriptionStatus1 can not be localized with this implementation
            this.passVariable = $localize`:@@identification_trans_unit: Text text ${this.prescriptionStatus1}:INTERPOLATION: another text`;

        }
        else {
            this.prescriptionStatus1 = PrescriptionStatus.CREATED;
            this.passVariable = $localize`:@@identification_trans_unit: Text text ${this.prescriptionStatus1}:INTERPOLATION: another text`;
        }

        // GOOD: This works too
        this.test2 = this.prescripionStatusPipe.transform(this.prescriptionStatus1);
    }

}
