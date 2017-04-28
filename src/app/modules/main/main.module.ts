import { NgModule } from '@angular/core';
//import the reducer
import { PostsEffects } from "./effects/posts";
import { EffectsModule } from "@ngrx/effects";
import { CrawlerService } from "./services/crawler";
import { routing } from './main.routing';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmModal } from './modals/confirm.modal';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { QueryPipe } from './pipes/query';

@NgModule({
  declarations: [
    MainComponent,
    ConfirmModal,
    QueryPipe
  ],
  imports: [
    routing,
    FormsModule,
    EffectsModule.run(PostsEffects),
    CommonModule,
    TranslateModule,
    BootstrapModalModule
  ],
  //Don't forget to add the component to entryComponents section
  entryComponents: [
    ConfirmModal
  ],
  providers: [CrawlerService]
})
export default class MainModule {
  constructor() { }
}