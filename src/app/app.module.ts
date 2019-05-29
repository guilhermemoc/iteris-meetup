import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { FormUmComponent } from './teste/componentes/form-um/form-um.component';
import { FormDoisComponent } from './teste/componentes/form-dois/form-dois.component';
import { ScssMeetupComponent } from './scss-meetup/scss-meetup.component';
import { BootstrapMeetupComponent } from './bootstrap-meetup/bootstrap-meetup.component';
import { BoxGridExemploComponent } from './bootstrap-meetup/componentes/box-grid-exemplo/box-grid-exemplo.component';

const appRoutes: Routes = [
  { path: '', component: TesteComponent },
  { path: 'css', component: ScssMeetupComponent },
  { path: 'bootstrap', component: BootstrapMeetupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    FormUmComponent,
    FormDoisComponent,
    ScssMeetupComponent,
    BootstrapMeetupComponent,
    BoxGridExemploComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
