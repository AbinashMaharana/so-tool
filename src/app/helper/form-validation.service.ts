import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class FormValidationService {

    private isFormValid: BehaviorSubject<any> = new BehaviorSubject(null);


    constructor() { }

    set setFormStatus(formStatus) {
        this.isFormValid.next(formStatus);
    }



    get getFormStatus(): Observable<any> {
        return this.isFormValid.asObservable();
    }



}
