import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class PreloadingOnDemandOptions {
    constructor(public routePath: string, public preload = true) { }
}

@Injectable({
    providedIn: 'root'
})
export class PreloadingService {
    private subject = new Subject<PreloadingOnDemandOptions>();
    public state: Observable<PreloadingOnDemandOptions>;
    constructor() {
        this.state = this.subject.asObservable();
    }

    public preloadBundle(path: string): void {
        const message = new PreloadingOnDemandOptions(path, true);
        this.subject.next(message);
    }
}
