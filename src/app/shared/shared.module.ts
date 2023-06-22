import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {PrimengModule} from "../primeng/primeng.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
        HttpClientModule
    ]
})
export class SharedModule { }
