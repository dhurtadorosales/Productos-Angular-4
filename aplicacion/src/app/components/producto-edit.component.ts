import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ProductoService} from "../services/producto.service";
import {Producto} from "../models/producto";
import {GLOBAL} from "../services/global";

@Component({
    selector: 'app-producto-edit',
    templateUrl: '../views/productos-add.html',
    providers: [ProductoService]
})
export class ProductoEditComponent implements OnInit {
    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;
    public isEdit;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = "Editar un producto";
        this.producto = new Producto(0, '', '', 0, ''); //PRODUCTO VACÍO POR DEFECTO
        this.isEdit = true; //COMPRUEBA QUE ESTÁ EN EDICIÓN
    }

    ngOnInit() {
        console.log("Se ha cargado el componente producto-edit");
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

    onSubmit() {
        console.log(this.producto);

        //SI HAY FICHEROS SELECCIONADOS
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            //SUBIMOS LA IMAGEN
            this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then(
                (result) => {
                    console.log(result);
                    this.resultUpload = result;
                    this.producto.imagen = this.resultUpload.filename;
                    this.updateProducto();
                },
                (error) => {
                    console.log(error);
                }
            );
        }
        else {
            //NO SUBIMOS LA IMAGEN
            this.updateProducto();
        }
    }

    updateProducto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._productoService.editProducto(id, this.producto).subscribe(
                result => {
                    if (result.code == 200) {
                        this._router.navigate(['/producto/' + id]);
                    }
                    else {
                        console.log(result);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload)
    }
}
