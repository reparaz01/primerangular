import {Component} from '@angular/core';

@Component ({
    selector : "primer-component",
    template : `
        <h1> Soy el primer component </h1>
        <h2> {{titulo }}</h2>
        <h2> {{description }}</h2>
        <h2> {{anyo}}</h2>
        `
})

export class PrimerComponent {
    public titulo: string;
    public description: string;
    public anyo: number;

    constructor(){
        this.titulo = "hoy es miercoles";
        this.description = "hola";
        this.anyo = 2023;
    }

}