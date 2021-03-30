import { Pipe, PipeTransform } from '@angular/core';

/**
 * ZIOMD-2988
 * Takes in a reportType.modificationMessage - searches for key values and returns the appropriate string
 */
@Pipe({name: 'amendedMessage'})
export class AmendedMessagePipe implements PipeTransform {

	public transform(amendedMessage: string): string {

		// Message that ultimately be returned - default to nothing
		let messageToReturn = '';

		// Make sure we have a amended/modification message to parse
		if(amendedMessage) {

			// Convert the incoming amended message to lower case for easier matching
			amendedMessage = amendedMessage.toLowerCase();

			// If amended message contains string 'interpretation' - append
			if(amendedMessage.includes('interpretation')) {
                messageToReturn = $localize`:@@AmendedMessagePipe-Interpretation: - Interpretation`;
			}

			// If amend message contains string 'demographics' - append
			else
			if(amendedMessage.includes('demographics')) {
                messageToReturn = $localize`:@@AmendedMessagePipe-Demographics: - Demographics`;
			}
		}

		return messageToReturn;
	}
}
