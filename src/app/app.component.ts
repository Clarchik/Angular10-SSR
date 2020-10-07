import { Component } from '@angular/core';
import { PreloadingService } from './services/preloading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular10-SSR';
    constructor(private preloadService: PreloadingService) { }


    public preloadBundle(route: string): void {
        this.preloadService.preloadBundle(route);
    }
}
