import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { PreloadingOnDemandOptions, PreloadingService } from '../services/preloading.service';
import { mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PreloadingOnDemandStategy implements PreloadingStrategy {
    private preloadOnDemand$: Observable<PreloadingOnDemandOptions>;
    constructor(private preloadingService: PreloadingService) {
        this.preloadOnDemand$ = this.preloadingService.state;
    }

    public preload(route: Route, load: () => Observable<any>): Observable<any> {
        return this.preloadOnDemand$.pipe(
            mergeMap((options) => {
                const shouldPreload = this.preloadCheck(route, options);
                return shouldPreload ? load() : EMPTY;
            })
        );
    }

    private preloadCheck(route: Route, options: PreloadingOnDemandOptions): boolean {
        return route.data && route.data.preload && [route.path, '*'].includes(options.routePath) && options.preload;
    }
}
