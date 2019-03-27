import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { ButtonComponent } from './button/button.component';
import { TestService } from './services/testService'

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TestService],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
  }

  ngDoBootstrap() {}
}
