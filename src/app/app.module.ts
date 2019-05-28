import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { FormUmComponent } from './teste/componentes/form-um/form-um.component';
import { FormDoisComponent } from './teste/componentes/form-dois/form-dois.component';

const appRoutes: Routes = [
  { path: '', component: TesteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    FormUmComponent,
    FormDoisComponent
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
