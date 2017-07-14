import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: '../views/error.html'
})
export class ErrorComponent implements OnInit {
    public titulo: string;

    constructor() {
        this.titulo = "Error! Página no encontrada";
    }

    ngOnInit() {
        console.log("Se ha cargado el componente error");
    }
}
