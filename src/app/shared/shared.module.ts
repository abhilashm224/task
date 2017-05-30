import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { DatepickerModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { nvD3 } from 'ng2-nvd3'
import { DirectionsMapDirective } from '../map/map.direction.directive';
import { DatepickerComponent } from '../datepicker/datepicker.component'
import { FocusMe } from './focus.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DatepickerModule.forRoot(),
        TabsModule.forRoot(),
    ],
    declarations: [
      DatepickerComponent,
      FocusMe,
      nvD3,
      DirectionsMapDirective
    ],
    providers: [
    ],
    exports: [
      DatepickerComponent,
      FocusMe,
      nvD3,
      DirectionsMapDirective
    ]
})
export class SharedModule {}