import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TrainingApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TrainingApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TrainingApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: TrainingApplicationSharedModule
    };
  }
}
