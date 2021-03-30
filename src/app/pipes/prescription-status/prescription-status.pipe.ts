import { Pipe, PipeTransform } from '@angular/core';

import { PrescriptionStatus, PrescriptionStatusData } from '../../constants/index';


@Pipe({ name: 'prescriptionStatus' })
export class PrescripionStatusPipe implements PipeTransform {

	/**
	 * Returns display text for the given OrderStatus param
	 *
	 * @param  {OrderStatus} orderStatus
	 * @return {string}
	 */
    public transform(prescriptionStatus: PrescriptionStatus): string {

        // localize dynamic content for custom pipe
        let var1 = $localize`:@@PrescripionStatusPipe-Canceled:Canceled`;


        if (PrescriptionStatusData[prescriptionStatus].name === PrescriptionStatusData[PrescriptionStatus.CANCELED].name) {
            // WARN: does not work
            // var1 = $localize`:@@PrescripionStatusPipe-Cancelled:` + PrescriptionStatus.CANCELED;
            // var1 = $localize`:@@PrescripionStatusPipe-Cancelled:${PrescriptionStatus.CANCELED}`;

            // GOOD: works
            var1 = $localize`:@@PrescripionStatusPipe-Canceled:Canceled`;
        }
        else if (PrescriptionStatusData[prescriptionStatus].name === PrescriptionStatusData[PrescriptionStatus.PROCESSING].name) {
            var1 = $localize`:@@PrescripionStatusPipe-Processing:Processing`;
        }
        else if (PrescriptionStatusData[prescriptionStatus].name === PrescriptionStatusData[PrescriptionStatus.COMPLETE].name) {
            var1 = $localize`:@@PrescripionStatusPipe-Complete:Complete`;
        }
        else if (PrescriptionStatusData[prescriptionStatus].name === PrescriptionStatusData[PrescriptionStatus.CREATED].name) {
            var1 = $localize`:@@PrescripionStatusPipe-Created:Created`;
        }

        return var1;
    }
}
