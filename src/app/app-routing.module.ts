import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { PreloadingOnDemandStategy } from './preloading-stategies/preloading-on-demand.service';

const routes: Routes = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
        data: { preload: true }
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled',
            preloadingStrategy: PreloadingOnDemandStategy
        }),
        CommonModule
    ],
    exports: [RouterModule],
    declarations: [TestComponent]
})
export class AppRoutingModule { }
