import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BanderasComponent } from './components/banderas/banderas.component';
import { CapitalesComponent } from './components/capitales/capitales.component';
import {PrimengModule} from "../primeng/primeng.module";



@NgModule({
    declarations: [
        HomeComponent,
        BanderasComponent,
        CapitalesComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        PrimengModule
    ]
})
export class PreguntasModule { }
