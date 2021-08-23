import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ApiConsoleModule } from './api-console.module';
import { DuiAppModule, DuiButtonModule, DuiIconModule, DuiWindowModule } from '@deepkit/desktop-ui';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], {useHash: true}),
        ApiConsoleModule,

        DuiAppModule.forRoot(),
        DuiWindowModule.forRoot(),
        DuiButtonModule,
        DuiIconModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
