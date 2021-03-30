
export enum ButtonNames {
    LOGIN = 'Login',
    SUBMIT = 'Submit',
    TOGGLE_STATUS = 'Toggle Status',
    CHANGE_MESSAGE = 'Change Message',
    CANCEL = 'Cancel',
    CONTINUE_DRAFT_REGISTRATION = 'Continue Draft Registration',
    ADD_NEW_REGISTRATION = 'Add New Registration',
}

export interface IButtonNamesData {
    name: string;
}

export const IButtons: { [buttonName: string]: IButtonNamesData; } = {
    [ButtonNames.LOGIN]: {
        name:  $localize`:@@loginButton:Login`
    },
    [ButtonNames.SUBMIT]: {
        name:  $localize`:@@submitButton:Submit`
    },
    [ButtonNames.TOGGLE_STATUS]: {
        name:  $localize`:@@toggleStatusButton:Toggle Status`
    },
    [ButtonNames.CHANGE_MESSAGE]: {
        name:  $localize`:@@changeMessageButton:Change Message`
    },
    [ButtonNames.CANCEL]: {
        name:  $localize`:@@changeMessageButton:Cancel`
    },
    [ButtonNames.CONTINUE_DRAFT_REGISTRATION]: {
        name:  $localize`:@@continueDraftRegistrationButton:Continue Draft Registration`
    },
    [ButtonNames.ADD_NEW_REGISTRATION]: {
        name:  $localize`:@@addNewRegistrationButton:Add New Registration`
    },
}

/**
 * Prescription Status Types
 * TODO: 5443: Should change this enum to PrescriptionStatus
 */
export enum PrescriptionStatus {
    // Backend Enums
    CREATED = 'CREATED', // Note: Created = Draft
    PROCESSING = 'PROCESSING',
    COMPLETE = 'COMPLETE',

    // Frontend Enums
    CANCELED = 'CANCELED'
}

/**
 * Interface for objects in the OrderStatus Map
 */
export interface IPrescriptionStatusData {
    statusKey: PrescriptionStatus;
    name: string;
}

/**
 * Order/Prescription Status Data
 */
export const PrescriptionStatusData: { [status: string]: IPrescriptionStatusData; } = {

    [PrescriptionStatus.CREATED]: {
        statusKey: PrescriptionStatus.CREATED,
        name: 'Draft'
    },

    [PrescriptionStatus.PROCESSING]: {
        statusKey: PrescriptionStatus.PROCESSING,
        name: 'In Progress'
    },

    [PrescriptionStatus.COMPLETE]: {
        statusKey: PrescriptionStatus.COMPLETE,
        name: 'Completed'
    },

    [PrescriptionStatus.CANCELED]: {
        statusKey: PrescriptionStatus.CANCELED,
        name: 'Canceled'
    }
};


// TODO: Change to prescription status variable names...
/**
 * Maps to order.latestFinalReportStatus
 */
export enum PrescriptionReportStatus {
    COMPLETE = 'COMPLETE',
    INTERPRETING = 'INTERPRETING'
}
