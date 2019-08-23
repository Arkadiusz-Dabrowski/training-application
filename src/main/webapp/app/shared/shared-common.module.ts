import { NgModule } from '@angular/core';

import { TrainingApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TrainingApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TrainingApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TrainingApplicationSharedCommonModule {}
