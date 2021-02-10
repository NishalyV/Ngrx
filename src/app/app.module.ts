import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { shoppingReducer } from './store/reducers/shopping.reducer';
import {FormsModule} from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {  EffectsModule } from '@ngrx/effects';
import { shoppingEffects } from './store/effects/shopping.effects';
import {SidebarModule} from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    EffectsModule.forRoot([shoppingEffects]),
    StoreModule.forRoot({
      shopping:shoppingReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
