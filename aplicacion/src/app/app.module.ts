import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//RUTAS
import { routing, appRoutingProviders } from  './app.routing';

//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductosAddComponent } from "./components/productos-add.component";
import { ProductoDetailComponent } from "./components/producto-detail.component";
import { ProductoEditComponent } from "./components/producto-edit.component";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        ProductosListComponent,
        ProductosAddComponent,
        ProductoDetailComponent,
        ProductoEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
