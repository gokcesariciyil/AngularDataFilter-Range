import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UnitsComponent} from './components/units/units.component';
import {UnitDetailComponent} from './components/unit-detail/unit-detail.component';

// routes
export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'units', component: UnitsComponent},
    {path: 'unitDetail/:id', component: UnitDetailComponent},
];
