import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TitleService {

    public dynamicTitle: String = '';
    public ymessage: String = '';

    constructor() {
        // WARN: dynamically changing content with a variable is not supported in i18n
        // WARN: content must be hardcoded
        // const mesg = 'default message Y on load';
        // this.ymessage = $localize`:@@title-s_messageY0:${mesg}`;

        // NOTE: content must be hardcoded
        this.ymessage = $localize`:@@title-s_messageY0:default message Y on load`;
    }

    setTitle(title: string) {
        this.dynamicTitle = title;
    }

    /**
     */
    setMessageY(id: number) {
        if (id === 0) {
            this.ymessage = $localize`:@@title-s_messageY1:Testing Message Y from Plurals`;
        }
        else {
            this.ymessage = $localize`:@@title-s_messageY2:Testing Message Y from Pipes`;
        }
    }

    /**
     * WARN: not possible to localized content changed in service with a variable
     * WARN: the content must be hardcoded
     */
    setMessageY_DOES_NOT_WORK(message: string) {
        if (Math.random() > 0.5) {
            // this.ymessage = $localize`:@@title-s_messageY1:${message}`;
        }
        else {
            // this.ymessage = $localize`:@@title-s_messageY2:${message}`;
        }
    }


}
