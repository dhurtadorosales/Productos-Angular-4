import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ProductoService} from "../services/producto.service";
import {Producto} from "../models/producto";

@Component({
    selector: 'app-producto-detail',
    templateUrl: '../views/producto-detail.html',
    providers: [ProductoService]
})
export class ProductoDetailComponent implements OnInit {
    public producto: Producto;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {}

    ngOnInit() {
        console.log("Se ha cargado el componente producto-detail");
        this.getProducto();
    }

    getProducto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._productoService.getProducto(id).subscribe(
                result => {
                    if (result.code == 200) {
                        this.producto = result.data;
                        console.log(this.producto.descripcion);
                    }
                    else {
                        this._router.navigate(['/productos']);
                    }
                },
                error => {
                    console.log(<any>error)
                }
            );
        });
    }
}
